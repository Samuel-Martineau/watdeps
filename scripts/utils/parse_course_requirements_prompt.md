### 🧠 Task  
Extract course codes that represent **prerequisites and corequisites** from a given course description.

---

### 📋 Instructions  

Follow these rules carefully:

1. **Extract only course codes** that are part of **prerequisites or corequisites**.  
   - **Treat corequisites as prerequisites.**

2. **Ignore** any of the following:
   - Department or instructor consent
   - Level or standing requirements (e.g., “Level at least 3A”)
   - Restrictions by program, year, or faculty
   - Any requirement that begins with **"4U"** (e.g., high school prerequisites)
   - Antirequisites (courses that should *not* be taken)

3. When interpreting expressions with slashes `/`:
   - `"One of A/B, C"` → means **(A AND B) OR C**
   - `"All of A/B, C"` → means **(A OR B) AND C**

4. **Do not remove actual course codes**, even if they look like level or year requirements.

5. Only include course codes that match this format: `/\w+ \d+/`  
   - Examples: `MATH 135`, `CS 116`  
   - Do not include: `"string"`, `"Level 2A"`, etc.

---

### ✅ Output Format

A **structured list** of course codes that reflects the **logical structure** of the prerequisites and corequisites.
