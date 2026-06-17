# OptaJob Website — GitHub Pages Setup Guide

**optajob.com · Made by Udit Tandon**

---

## 📂 File Structure

```
optajob/
├── index.html          → optajob.com/
├── about/
│   └── index.html      → optajob.com/about
├── privacy/
│   └── index.html      → optajob.com/privacy   ← Required by Play Store
├── terms/
│   └── index.html      → optajob.com/terms
├── admin/
│   └── index.html      → optajob.com/admin
├── assets/
│   ├── css/style.css   ← Shared styles (all pages use this)
│   └── js/main.js      ← Shared JavaScript
└── README.md           ← This file
```

---

## 🚀 Step-by-Step: Put This on GitHub Pages

### Step 1 — Create a GitHub Repository

1. Go to **github.com** → Sign in (or create a free account)
2. Click the **+** button (top right) → **New repository**
3. Repository name: `optajob`
4. Set to **Public** (required for free GitHub Pages)
5. Check "Add a README file"
6. Click **Create repository**

---

### Step 2 — Upload All Files

1. In your new repository, click **Add file** → **Upload files**
2. Drag and drop ALL the files and folders from the `optajob/` folder
   - `index.html`
   - `about/` folder (with index.html inside)
   - `privacy/` folder
   - `terms/` folder
   - `admin/` folder
   - `assets/` folder (with css/ and js/ inside)
3. Write a commit message: `Initial website upload`
4. Click **Commit changes**

---

### Step 3 — Enable GitHub Pages

1. In your repository, click **Settings** (top menu bar)
2. Scroll down to **Pages** in the left sidebar
3. Under **Source**, select:
   - Branch: **main**
   - Folder: **/ (root)**
4. Click **Save**
5. Wait 2-5 minutes
6. GitHub will show you a green banner: `Your site is published at https://yourusername.github.io/optajob`

---

### Step 4 — Connect optajob.com to GitHub Pages

Since you bought optajob.com on Hostinger and linked it to GitHub, do this:

**In GitHub (repository Settings → Pages):**
1. Under "Custom domain", type: `optajob.com`
2. Click **Save**
3. Check "Enforce HTTPS" (click it — wait a few minutes for it to become available)

**In Hostinger (DNS Settings):**
1. Log into hPanel at hostinger.com
2. Go to **Domains** → **optajob.com** → **Manage** → **DNS / Nameservers**
3. Add these 4 **A records** pointing to GitHub's servers:
   ```
   Type: A  |  Name: @  |  Value: 185.199.108.153
   Type: A  |  Name: @  |  Value: 185.199.109.153
   Type: A  |  Name: @  |  Value: 185.199.110.153
   Type: A  |  Name: @  |  Value: 185.199.111.153
   ```
4. Add this **CNAME record**:
   ```
   Type: CNAME  |  Name: www  |  Value: yourusername.github.io
   ```
5. Click Save

**Wait 24-48 hours** for DNS to propagate. After that:
- `optajob.com` → Your homepage ✅
- `optajob.com/privacy` → Privacy Policy ✅
- `optajob.com/terms` → Terms of Service ✅
- `optajob.com/about` → About page ✅
- `optajob.com/admin` → Admin dashboard ✅

---

## 🔐 Admin Dashboard Login

**URL:** `optajob.com/admin`

| Field | Value |
|-------|-------|
| Email | 2mins.facts@gmail.com |
| Password | Ultimate@123# |

The admin dashboard lets you:
- ✅ Add and manage Job Search APIs (JSearch, Adzuna, etc.)
- ✅ Add and manage Email APIs (Brevo, Mailjet, SendGrid)
- ✅ Configure Ad Network settings (AdMob, Unity, Meta)
- ✅ Set credit days for users
- ✅ View registered users
- ✅ Manage admin team members
- ✅ View system notifications

> ⚠️ **Important:** Admin configurations on the website are stored in your browser's local storage. To sync them with the mobile app across all devices, connect Supabase (pending task from the PDF guide).

---

## 📋 Pages Overview

| Page | URL | Purpose |
|------|-----|---------|
| Home | optajob.com | Main landing page with features, pricing, FAQ |
| About | optajob.com/about | Story, mission, values, contact |
| Privacy | optajob.com/privacy | Required by Google Play Store |
| Terms | optajob.com/terms | Terms of Service |
| Admin | optajob.com/admin | Password-protected admin dashboard |

---

## 🔧 How to Update the Website

To change any content after uploading:

1. Go to your GitHub repository
2. Click the file you want to edit (e.g., `index.html`)
3. Click the **pencil icon** (Edit this file)
4. Make your changes
5. Click **Commit changes**
6. The website updates automatically within 2-5 minutes

---

## 📱 After Play Store Approval

Once your app is approved on Google Play:
1. Edit `index.html`
2. Find the line: `<div class="download-badge">`
3. Change it to a real Google Play badge linking to your app
4. Commit — website updates within minutes

---

## 📧 Contact

- Email: support@optajob.com
- Admin: 2mins.facts@gmail.com
- Made by: **Udit Tandon**
