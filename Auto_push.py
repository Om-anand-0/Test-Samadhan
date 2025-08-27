import os
import requests
import datetime

# 🔹 Your repo path
REPO_PATH = r"O:\Code\Code-Samadhan\Test"

# Step 1: Move to repo directory
os.chdir(REPO_PATH)

# Step 2: Push to GitHub
os.system('git add .')
os.system(f'git commit -m "Auto push {datetime.datetime.now()}"')
os.system('git push origin main')

# Step 3: Call Hackathon API
#repo = "Om-anand-0/Test-Samadhan"  # 👈 your repo name
repo = input("Enter your github repo link (Https)")
api_url = f"https://api.calmchase.com/hackathon/lastpush?repo=https://github.com/{repo}.git"

headers = {
    "User-Agent": "Mozilla/5.0",
    "Origin": "https://chasathons.calmchase.com",
    "Referer": "https://chasathons.calmchase.com/",
    # "Cookie": "session=abcdef123456789;"  # only if API rejects without cookie
}

response = requests.get(api_url, headers=headers)

print("Status Code:", response.status_code)
print("Response:", response.text)
