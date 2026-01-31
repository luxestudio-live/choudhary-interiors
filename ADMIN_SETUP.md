# Admin Panel Setup Guide

## 🎉 Your Admin Panel is Ready!

### Access the Admin Panel
Navigate to: `https://your-domain.com/admin`

---

## 🔐 Firebase Setup

### 1. Create Admin User
You need to create an admin user in Firebase:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: **choudhary-interiors**
3. Navigate to **Authentication** > **Users**
4. Click **Add user**
5. Enter email and password for your admin account
6. Save the user

### 2. Deploy Firestore Security Rules

1. Install Firebase CLI (if not already installed):
   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```bash
   firebase login
   ```

3. Initialize Firebase in your project (if not done):
   ```bash
   firebase init firestore
   ```
   - Select your project
   - Accept default filenames

4. Deploy the security rules:
   ```bash
   firebase deploy --only firestore:rules
   ```

The rules in `firestore.rules` will:
- Allow public read access to projects and reviews
- Allow anyone to create enquiries (contact form submissions)
- Restrict write/update/delete operations to authenticated admins only

---

## ☁️ Cloudinary Setup

### Create Upload Preset

1. Go to [Cloudinary Dashboard](https://cloudinary.com/console)
2. Navigate to **Settings** > **Upload**
3. Scroll to **Upload presets**
4. Click **Add upload preset**
5. Configure:
   - **Preset name**: `choudhary-interiors`
   - **Signing mode**: Unsigned
   - **Folder**: `choudhary-interiors` (optional, for organization)
   - **Access mode**: Public
6. Save

---

## 📋 Admin Panel Features

### 1. **Projects Management** (`/admin/dashboard/projects`)
- ✅ Add new portfolio projects
- ✅ Upload multiple images via Cloudinary
- ✅ Add YouTube video links
- ✅ Edit existing projects
- ✅ Delete projects
- ✅ Reorder projects (using order field)

**How to add a project:**
1. Click "Add Project"
2. Fill in project details (title, description, category, location, year)
3. Click "Upload Images" to upload photos from your computer
4. Click "Add YouTube Video" and paste YouTube URL
5. Set display order (lower numbers appear first)
6. Click "Create Project"

**YouTube Video Format:**
- Paste any YouTube URL (e.g., `https://www.youtube.com/watch?v=VIDEO_ID`)
- The system automatically converts it to embed format
- Videos display perfectly in the portfolio lightbox

### 2. **Reviews Management** (`/admin/dashboard/reviews`)
- ✅ Add client testimonials
- ✅ Edit existing reviews
- ✅ Delete reviews
- ✅ Set rating (1-5 stars)
- ✅ Choose client icon/avatar
- ✅ Reorder reviews

**How to add a review:**
1. Click "Add Review"
2. Enter client name
3. Paste review content
4. Select star rating
5. Choose an icon/emoji for the client
6. Set display order
7. Click "Add Review"

### 3. **Contact Enquiries** (`/admin/dashboard/enquiries`)
- ✅ View all contact form submissions
- ✅ Filter by status (New, Read, Responded)
- ✅ Mark enquiries as read or responded
- ✅ Delete old enquiries
- ✅ See submission date and time
- ✅ View project type and budget range

**Enquiry Workflow:**
1. Customer fills contact form on website
2. Enquiry appears in admin panel with "New" status
3. Click "Mark as Read" after reviewing
4. After responding to customer, click "Mark as Responded"
5. Delete old/irrelevant enquiries to keep panel clean

---

## 🎨 How It Works

### Portfolio System
- **Existing Projects**: Your 7 existing projects remain intact in the code
- **New Projects**: Projects added via admin panel are stored in Firestore
- **Display**: Portfolio page shows Firestore projects + fallback to existing ones
- **Images**: Stored in Cloudinary (unlimited uploads)
- **Videos**: YouTube embeds (no storage limits, better performance)

### Reviews System
- **Default Reviews**: 3 reviews (Nadeem, Ayesha, Saif) are hardcoded as fallback
- **Admin Reviews**: Reviews added via admin panel override defaults
- **Display**: Homepage testimonials fetch from Firestore with fallback to defaults

### Contact Form
- **Frontend**: Contact form on `/contact` page
- **Storage**: All submissions save to Firestore automatically
- **Notifications**: Form shows success/error messages
- **Admin View**: All enquiries visible in admin panel immediately

---

## 🔒 Security Best Practices

1. **Admin Credentials**: Use a strong password for your admin account
2. **Email Protection**: Don't share your admin email publicly
3. **Regular Updates**: Check enquiries regularly and mark as responded
4. **Backup**: Export important enquiries periodically
5. **Firestore Rules**: Don't modify the security rules without understanding them

---

## 📱 Responsive Design

The admin panel is fully responsive:
- ✅ Desktop: Full sidebar navigation
- ✅ Tablet: Collapsible sidebar
- ✅ Mobile: Bottom menu + hamburger navigation

---

## 🆘 Troubleshooting

### Can't login to admin panel
- Ensure you created a user in Firebase Authentication
- Check email and password are correct
- Verify Firebase config in `.env.local` is correct

### Images not uploading
- Verify Cloudinary upload preset is set to "Unsigned"
- Check preset name is exactly `choudhary-interiors`
- Ensure cloud name in `.env.local` matches your Cloudinary account

### Enquiries not saving
- Check Firestore security rules are deployed
- Verify Firebase config is correct
- Check browser console for errors

### Projects/Reviews not showing
- Check if Firestore has data (Firebase Console > Firestore Database)
- Verify collection names are correct: `projects`, `reviews`, `enquiries`
- Check browser console for errors

---

## 📊 Collections Structure

### Projects Collection
```javascript
{
  title: string,
  description: string,
  category: string,
  location: string,
  year: string,
  images: string[],      // Cloudinary URLs
  videos: string[],      // YouTube embed URLs
  order: number,
  budget: string,        // optional
  timeline: string,      // optional
  details: string,       // optional
  createdAt: timestamp,
  updatedAt: timestamp
}
```

### Reviews Collection
```javascript
{
  name: string,
  content: string,
  rating: number,        // 1-5
  icon: string,          // emoji
  order: number,
  createdAt: timestamp,
  updatedAt: timestamp
}
```

### Enquiries Collection
```javascript
{
  name: string,
  email: string,
  phone: string,
  projectType: string,
  budget: string,
  message: string,
  status: string,        // 'new' | 'read' | 'responded'
  createdAt: timestamp
}
```

---

## 🚀 Next Steps

1. ✅ Create admin user in Firebase Authentication
2. ✅ Deploy Firestore security rules
3. ✅ Create Cloudinary upload preset
4. ✅ Login to admin panel
5. ✅ Add your first project/review
6. ✅ Test contact form submission

Your admin panel is production-ready! 🎊
