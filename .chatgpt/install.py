import openai

openai.api_key = 'YOUR_API_KEY'

response = openai.Completion.create(
    engine="text-davinci-003",  # Use the appropriate engine for your task
    prompt="ChatGPT is great because ",
    max_tokens=150  # Adjust as needed
)

print(response['choices'][0]['text'])
