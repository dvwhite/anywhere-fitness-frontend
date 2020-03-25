

// Login
// POST /api/auth/login
/* Request shape:
  username*
  password*
*/

// Register new user
// POST /api/auth/register
/* Request shape:
  username*
  password*
  firstName
  lastName
  email
  roleId*
*/

// Delete category
// DELETE /api/category/:id
/* Request shape:
  id
*/

// Get all categories
// GET /api/category
/* Request shape: None */

// Add new category
// POST /api/category
/* Request shape:
  name*
  description
*/

// Update category
// PUT /api/category/:id
/* Request shape:
  id
  name*
  description
*/

// Delete class
// DELETE /api/classes/:id
/* Request shape:
  id
*/

// Get all classes
// GET /api/classes
/* Request shape: None */

// Add new class
// POST /api/classes
/* Request shape:
  title*
  instructorId*
  categoryId*
  scheduleTime
  address
  city
  state
  zipCode
*/

// Update a class
// PUT /api/classes/:id
/* Request shape:
  title*
  instructorId*
  categoryId*
  scheduleTime
  address
  city
  state
  zipCode
*/

// Update the current logged in user
// PUT /api/user
/* Request shape: 
  username
  password
  firstName
  lastName
  email
  roleId
*/

// Delete the current logged in user
// DELETE /api/user
/* Request shape: None */

// Sign up user for class
// POST /api/user/classes/:id
/* Request shape:
  id
*/

// Remove user from the class
// DELETE /api/user/classes/:id
/* Request shape:
  id
*/
