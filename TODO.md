## frontend

### pages
- login/register 
- homepage

#### functionalities
- export table to CSV

## backend 

### modules

#### application 
- wash
    > entity
    >> id, vehicleId, scheduleDate, cycleId, completed
    - it not need to quantify washes. this is made by wash cycle module

- wash-cycle
    > entity
    >> id, numberOfWashes, vehicleId, rangeDate, completedWashes 

- vehicle
    > entity
    >> id, licensePlate, proprietary, vehicleType
    - proprietary may be a separated class, with a name and contact field.

- user
    > entity
    >> id, name, password, role
    - role: [ "ADMIN", "COLAB" ]

- notification
    > entity
    >> id, recipientdId, content, readAt, createdAt

#### database 
    mongodb
    prisma

#### http 
    express

#### notifications
    cron job function from **vercel**

