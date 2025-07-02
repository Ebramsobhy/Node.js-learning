# 📅 Date Formatter & Age Calculator
This Node.js script processes a CSV file containing personal data and generates human-readable paragraphs

---
## 🎯 Task Objectives
- Format the birth date and time to match the person's **locale**, using:
  - Language code
  - Country code
  - Timezone
- Calculate the person’s **age** on **October 1st, 2025**.
- Add the calculated age to the person’s data.
- Generate a readable **paragraph** for each person.
- Save all output paragraphs in a **new text file**.

---
## 🛠️ Technologies Used
- **Node.js** 
- **Luxon** 

## ▶️ How to Run
1. Place your `MOCK_DATA.csv` file in the **root directory** of the project (the same folder where the script file is located).
2. Make sure you have Node.js installed on your system.
3. Install dependencies (if not already installed):
   ```bash
   npm install luxon
4. Run the script using Node.js
   ```bash
   node index.js
5. After running, a new file named new_data.txt will be created in the project folder.    

### 📂 Output Example
1 - Tawnya Grimwood is born in Uzbekistan on 24-yanvar, 1981, 04:15 (GMT+5)
his age in October 2025 will be almost 45 years 
his contact information: tgrimwood0@123-reg.co.uk

2 - Dylan Haugen is born in Morocco on October 19, 1984 at 5:59 AM GMT+1
his age in October 2025 will be almost 41 years 
his contact information: dhaugen1@surveymonkey.com