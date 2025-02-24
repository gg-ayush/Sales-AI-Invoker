import { client } from "@/lib/prisma"
import { currentUser } from "@clerk/nextjs"
import { NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET!, {
  typescript: true,
  apiVersion: "2024-04-10",
})

export async function GET() {
  try {
    const user = await currentUser()
    if (!user) {
      return NextResponse.json({ error: "User not authenticated" }, { status: 401 })
    }

    const account = await createStripeAccount()
    if (!account) {
      return NextResponse.json({ error: "Failed to create Stripe account" }, { status: 500 })
    }

    await updateStripeAccount(account.id)
    await createAndUpdatePerson(account.id)
    await createOwner(account.id)
    await completeAccount(account.id)

    const savedUser = await saveStripeAccountId(user.id, account.id)
    if (!savedUser) {
      return NextResponse.json({ error: "Failed to save Stripe account ID" }, { status: 500 })
    }

    const accountLink = await createAccountLink(account.id)
    return NextResponse.json({ url: accountLink.url })
  } catch (error) {
    console.error("An error occurred:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

async function createStripeAccount() {
  return stripe.accounts.create({
    country: "US",
    type: "custom",
    business_type: "company",
    capabilities: {
      card_payments: { requested: true },
      transfers: { requested: true },
    },
    external_account: "btok_us",
    tos_acceptance: {
      date: 1547923073,
      ip: "172.18.80.19",
    },
  })
}

async function updateStripeAccount(accountId: string) {
  return stripe.accounts.update(accountId, {
    business_profile: {
      mcc: "5045",
      url: "https://bestcookieco.com",
    },
    company: {
      address: {
        city: "Fairfax",
        line1: "123 State St",
        postal_code: "22031",
        state: "VA",
      },
      tax_id: "000000000",
      name: "The Best Cookie Co",
      phone: "8888675309",
    },
  })
}

async function createAndUpdatePerson(accountId: string) {
  const person = await stripe.accounts.createPerson(accountId, {
    first_name: "Jenny",
    last_name: "Rosen",
    relationship: {
      representative: true,
      title: "CEO",
    },
  })

  return stripe.accounts.updatePerson(accountId, person.id, {
    address: {
      city: "victoria ",
      line1: "123 State St",
      postal_code: "V8P 1A1",
      state: "BC",
    },
    dob: { day: 10, month: 11, year: 1980 },
    ssn_last_4: "0000",
    phone: "8888675309",
    email: "jenny@bestcookieco.com",
    relationship: { executive: true },
  })
}

async function createOwner(accountId: string) {
  return stripe.accounts.createPerson(accountId, {
    first_name: "Kathleen",
    last_name: "Banks",
    email: "kathleen@bestcookieco.com",
    address: {
      city: "victoria ",
      line1: "123 State St",
      postal_code: "V8P 1A1",
      state: "BC",
    },
    dob: { day: 10, month: 11, year: 1980 },
    phone: "8888675309",
    relationship: {
      owner: true,
      percent_ownership: 80,
    },
  })
}

async function completeAccount(accountId: string) {
  return stripe.accounts.update(accountId, {
    company: { owners_provided: true },
  })
}

async function saveStripeAccountId(userId: string, accountId: string) {
  return client.user.update({
    where: { clerkId: userId },
    data: { stripeId: accountId },
  })
}

async function createAccountLink(accountId: string) {
  return stripe.accountLinks.create({
    account: accountId,
    refresh_url: "http://localhost:3000/callback/stripe/refresh",
    return_url: "http://localhost:3000/callback/stripe/success",
    type: "account_onboarding",
    collection_options: { fields: "currently_due" },
  })
}

