# 1. Cookie
- res sets cookies: You tell the browser to store cookies using res.cookie().
- req reads cookies: The browser sends back cookies to the server in the request , and you access them using req.cookies.
- Cookies come from the client (browser), and they are included in the HTTP request headers.
- Therefore, to access cookies sent by the client, you need to read them from the request object (req).
- middleware require - cookieParser 
- these are of two types - signed cookie and unsigned cookie



# 2. Express-Session Basics 📝
- Session is simple if i made a request to the server and server responds back is a session.
- `express-session` is a middleware for managing user sessions in an Express.js application. This document outlines the **key points to remember** about using `express-session`.
- session id are same for the req made from the same browser ( even if you chg the tabs) but different for browser.
---

## 🚀 Where is the Session Stored?
- **Server-Side**:  
  By default, session data is stored server-side in a temporary in-memory store. This is suitable for development but not production due to potential memory limits.
  The session data (e.g., req.session.name = "John") is not visible transparently like cookie as it is in stored server-side.
  
- **Cookies**:  
  The browser only stores the **session ID** in a cookie (default name: `connect.sid`), which is used to retrieve session data from the server.

---

## 🛫 Session Initialization
Sessions are created when the `req.session` object is accessed in your code. 

### Key Points:
1. **Default Behavior**:
   - If `saveUninitialized: true` is set, an empty session is created even if no data is added to it.


## 📂 Temporary Default Store
By default, session data is stored in an in-memory store (`MemoryStore`):
- **Volatile**: Data is lost when the server restarts.
- **Not Scalable**: Cannot handle a large number of sessions.

For production, use a **persistent store** like:
- **Redis**: High scalability and performance.
- **MongoDB**: Persistent storage (e.g., `connect-mongo`).
- **MySQL/PostgreSQL**: With appropriate libraries.

---

## ⏳ Session Lifetime
- **Session Expiry**: Controlled by the `maxAge` property in the cookie settings.
- Example:
  ```javascript
  cookie: {
      maxAge: 30 * 60 * 1000 // 30 minutes
  }


# Connect-flash 
- `connect-flash` is a middleware for Node.js and Express that provides temporary storage for flash messages. Flash messages are typically used to convey information (like success or error messages) between requests, often after a redirect.
- It works with session only.
- Once it flashes on screen won't flashes after refreshing the same page.