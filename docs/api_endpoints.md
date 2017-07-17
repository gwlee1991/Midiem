# API Endpoints

## HTML API

### Root
  * GET /

## JSON API

### Users
  * POST /api/users

### Session
  * POST /api/session
  * DELETE /api/session

### Posts
  * GET /api/posts/
  * GET /api/posts/:id
  * POST /api/posts
  * PATCH /api/posts/:id
  * DELETE /api/posts/:id

### Comments
  * POST /api/posts/:post_id/comments
  * PATCH /api/comments/:id
  * DELETE /api/comments/:id

### Topics
  * GET /api/topics
  * GET /api/topics/:id
