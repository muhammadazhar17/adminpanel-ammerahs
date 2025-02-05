export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-02-01'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "skq4vOmyWH5nSuUien24bsRdJ3stQsDzT7m7Jq5ZDzWJ8ifR7FwGlV8WCAAE4NjruVgwgTvk7L1Mvv8oxLZwvwTfkgCK1KbMLg4JB0eaOmA4VQzVloFF0HBFUnrvWANerBdXMQcSjSQZb8I4iQqOgoBsImo2MqPMdUBTdPmSmD0KlQC37oDS",
  'Missing environment variable: NEXT_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
