# Family Tree API Documentation

This document describes the RESTful API contract for managing Families, People, and Relationships in the Family Tree app. All endpoints are under `/api/` and expect authentication (user context is required; see notes).

---

## Authentication

- All endpoints require the user to be authenticated.
- The user ID is expected to be available in the request context (e.g., via a header like `x-user-id` for development/testing, or via Clerk/Supabase in production).

---

## Family Endpoints

### List Families

- **GET** `/api/family`
- **Description:** List all families owned by the authenticated user.
- **Response:**
  ```json
  [
    {
      "id": "string",
      "ownerId": "string",
      "name": "string",
      "description": "string",
      "countryOfOrigin": "string",
      "privacyLevel": "PRIVATE" | "PUBLIC",
      "createdAt": "ISODate",
      "updatedAt": "ISODate",
      "metadata": { ... }
    },
    ...
  ]
  ```

### Create Family

- **POST** `/api/family`
- **Body:**
  ```json
  {
    "name": "string", // required
    "description": "string",
    "countryOfOrigin": "string",
    "privacyLevel": "PRIVATE" | "PUBLIC",
    "metadata": { ... } // optional JSON
  }
  ```
- **Response:** Created family object (see above)

### Update Family

- **PUT** `/api/family`
- **Body:**
  ```json
  {
    "id": "string", // required
    "name": "string",
    "description": "string",
    "countryOfOrigin": "string",
    "privacyLevel": "PRIVATE" | "PUBLIC",
    "metadata": { ... }
  }
  ```
- **Response:** `{ "success": true }` or error

### Delete Family

- **DELETE** `/api/family?id=FAMILY_ID`
- **Response:** `{ "success": true }` or error

---

## Person Endpoints

### List People in a Family

- **GET** `/api/person?familyId=FAMILY_ID`
- **Description:** List all people in a given family (owned by user or public family).
- **Response:**
  ```json
  [
    {
      "id": "string",
      "familyId": "string",
      "firstName": "string",
      "lastName": "string",
      "maidenName": "string",
      "gender": "string",
      "bio": "string",
      "profileImageUrl": "string",
      "dateOfBirth": "ISODate",
      "dateOfDeath": "ISODate",
      "createdAt": "ISODate",
      "updatedAt": "ISODate",
      "metadata": { ... }
    },
    ...
  ]
  ```

### Create Person

- **POST** `/api/person`
- **Body:**
  ```json
  {
    "familyId": "string", // required
    "firstName": "string", // required
    "lastName": "string",
    "maidenName": "string",
    "gender": "string",
    "bio": "string",
    "profileImageUrl": "string",
    "dateOfBirth": "ISODate",
    "dateOfDeath": "ISODate",
    "metadata": { ... }
  }
  ```
- **Response:** Created person object (see above)

### Update Person

- **PUT** `/api/person`
- **Body:**
  ```json
  {
    "id": "string", // required
    "firstName": "string",
    "lastName": "string",
    "maidenName": "string",
    "gender": "string",
    "bio": "string",
    "profileImageUrl": "string",
    "dateOfBirth": "ISODate",
    "dateOfDeath": "ISODate",
    "metadata": { ... }
  }
  ```
- **Response:** `{ "success": true }` or error

### Delete Person

- **DELETE** `/api/person?id=PERSON_ID`
- **Response:** `{ "success": true }` or error

---

## Relationship Endpoints

### List Relationships in a Family

- **GET** `/api/relationship?familyId=FAMILY_ID`
- **Description:** List all relationships for people in a given family.
- **Response:**
  ```json
  [
    {
      "id": 1,
      "fromPersonId": "string",
      "toPersonId": "string",
      "relationshipType": "SPOUSE" | "PARENT_OF",
      "startDate": "ISODate",
      "endDate": "ISODate"
    },
    ...
  ]
  ```

### Create Relationship

- **POST** `/api/relationship`
- **Body:**
  ```json
  {
    "fromPersonId": "string", // required
    "toPersonId": "string", // required
    "relationshipType": "SPOUSE" | "PARENT_OF", // required
    "startDate": "ISODate",
    "endDate": "ISODate"
  }
  ```
- **Response:** Created relationship object (see above)

### Update Relationship

- **PUT** `/api/relationship`
- **Body:**
  ```json
  {
    "id": 1, // required
    "startDate": "ISODate",
    "endDate": "ISODate"
  }
  ```
- **Response:** `{ "success": true }` or error

### Delete Relationship

- **DELETE** `/api/relationship?id=RELATIONSHIP_ID`
- **Response:** `{ "success": true }` or error

---

## Collaborator Endpoints

### Invite Collaborator

- **POST** `/api/family/collaborator/invite`
- **Body:**
  ```json
  {
    "familyId": "string", // required
    "email": "string" // required
  }
  ```
- **Response:** `{ "success": true, "inviteId": "string" }` or error

### Accept Invite

- **POST** `/api/family/collaborator/accept`
- **Body:**
  ```json
  {
    "inviteId": "string" // required
  }
  ```
- **Response:** `{ "success": true }` or error

### Remove Collaborator

- **DELETE** `/api/family/collaborator?familyId=FAMILY_ID&userId=USER_ID`
- **Response:** `{ "success": true }` or error

### List Collaborators

- **GET** `/api/family/collaborator?familyId=FAMILY_ID`
- **Response:**
  ```json
  [
    { "userId": "string", "email": "string", "role": "OWNER" | "COLLABORATOR" }, ...
  ]
  ```

---

## Privacy Controls

### Set Family Privacy

- **PUT** `/api/family/privacy`
- **Body:**
  ```json
  {
    "familyId": "string", // required
    "privacyLevel": "PRIVATE" | "PUBLIC" // required
  }
  ```
- **Response:** `{ "success": true }` or error

### Get Family Privacy

- **GET** `/api/family/privacy?familyId=FAMILY_ID`
- **Response:**
  ```json
  { "privacyLevel": "PRIVATE" | "PUBLIC" }
  ```

---

## Advanced Search & Filter

### Search People by Name

- **GET** `/api/person/search?familyId=FAMILY_ID&query=NAME`
- **Response:**
  ```json
  [
    { ...person fields... }, ...
  ]
  ```

### Filter Families by Country

- **GET** `/api/family/filter?country=COUNTRY`
- **Response:**
  ```json
  [
    { ...family fields... }, ...
  ]
  ```

---

## Notes

- All endpoints expect and return JSON.
- The `metadata` field is a flexible JSON object for storing extra data.
- Error responses are always JSON with an `error` field and may include `details`.
- All create/update endpoints validate required fields and ownership.
- For production, replace the user ID extraction with your real authentication context.

---

## Notes (Extensions)

- Collaborator invites require email and familyId; only owners can invite/remove.
- Privacy controls are restricted to owners.
- Search and filter endpoints support partial matches and are case-insensitive.
