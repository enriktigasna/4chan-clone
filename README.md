# 4chan clone


| API Route | What it does |
| --------- | ------------ |
| /api/getBoards | Returns boards |
| /api/register | Creates new user and returns JWT |
| /api/login | Generates JWT for user and returns it |
| /api/createThread | Creates a thread for selected Board |
| /api/createReply | Creates reply for selected thread |
| /api/getThread | Returns thread |
| /api/getBoardThreads | Returns 10 threads for selected board, with pagination, sorts by last created |



### TODO

Most to least urgent

Make database model ✅

Make index that matches 4chan with boards from API ✅

Make hashing controller ✅

Make CSS for index, rules, TOS etc. ✅

Make JWT controller ✅

JWT authentication middleware ✅

/[slug]/

/[Thread]/

/[Reply]/

Make unique access token generator for each user

Make CSS for /[slug]/, /[Thread]/, /[Reply]/ etc.

Implement bumped-at for posts, to get latest bumped post at the top, but cap the bumps for posts older than 48 hours

Finish index, add footer, statistics etc.

Add image upload

Add e2e tests and unit tests
