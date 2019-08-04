# WIGC-Bird-Trakr-App

## **Employee**
Can sign up / create account / login. Record visits to a Property. Track visits made per period of time. Collect information describing each visit i.e. bird count, arrival/depart times, actions taken, interactions with people, general observations.

**Relationships** <br>
one-to-many (visits)

**Employee Model**
* ID
* email
* password
* firstName
* lastName
* imgURL
---
## **Property**
Admin can create property with fields describing features and necessary information. 

**Property Model**
* ID
* customerID
* contact
* address
* phone
* type
* description
* special
* pricePerVisit
* water
* imgURL

**Relationships** <br>
one-to-many (customer)

---
## **Visit**
Recorded by employee. Points to an employee and a property

**Visit Model**
* ID
* employeeID
* propertyID
* numberOfVisits
* arrivalTime
* departureTime
* gooseCount
* actions
* description
* water
* weather

**Relationships**<br>
one-to-one (employee)<br>
one-to-many (properties)

---

## **Client**
Admin can create client 

**Client Model**
* ID
* propertyID
* firstName
* lastName
* phone
* email

**Relationships**<br>
one-to-many(agent)<br>
one-to-many(property)

---

## **Agent**
Can sign up / login with associated clientID and can create "agent report" for the purpose of collection on-site data of goose sighting/activity

**Agent Model**
* ID
* clientID
* email
* password
* firstName
* lastName

**Relationships**<br>
many-to-one(client)

---

## **Agent Report**

Created by agent to collect time, location, birdCount

**Agent Report Model
* ID
* agentID
* time/date
* gooseCount
* location
* notes