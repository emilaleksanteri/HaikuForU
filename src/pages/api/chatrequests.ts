import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  organization: 'org-VH90biEnCK2gyFHj3909q8HS',
  apiKey: process.env.NEXT_PUBLIC_chat_api,
})

const opneai = new OpenAIApi(configuration) // set headers for API

const responsePromt = async (promtsToUse: Array<String>) => {
  const paramsToUse = promtsToUse.toString() // turn array of parameters into a string

  const response = await opneai.createCompletion({
    model: "text-davinci-003",
    prompt: `write me a haiku about ${paramsToUse} in 50 words or less`,
    max_tokens: 100,
  })
  const haiku: String | undefined = response.data.choices[0].text // data returned
  return haiku
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { responsePromt }