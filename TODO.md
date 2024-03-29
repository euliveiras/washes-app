## frontend

### pages

-   login/register
    -   clerk provider
-   homepage
    -   table filter's
        -   date range
        -   input to search a vehicle licensePlate
- license plate
- wash
- driver
- organization

#### functionalities

-   export table to CSV
-   import CSV
-   filtros de busca
    -   licenseDriver, type, date, owner
    -   verde como lavado, vermelho como não lavado, amarelo como data próxima

## backend

### todo

    [x] search for license plate
        if founded
            [x] search for active wash cycle
            if founded
                    [x] search for the wash-cycle washes
                if founded
                    [x] prompt user to confirm wash
                else
                    [x] create a wash
            else
                [x] initialize wash cycle

        else
            [x] create vehicle
            [x] crate driver
            [ ] prompt user to create a organization
                [ ] search for organization
                    if not founded
                        [ ] create organization
            [x] prompt user to create wash cycle
            [x] prompt user to create wash

    [x] transform driver module into a Vehicle prop
    [x] create pages on figma

### modules

#### wash-cycle

##### use-cases

    - create wash-cycle
        - initialize with optional washes embed

#### wash

    - it needs to verify if already has a wash to given scheduled date

##### use-cases

    - create wash
        - verify if has a wash to the given schedule date

#### application

-   wash

    > entity
    >
    > > id, vehicleId, scheduledDate, cycleId, note, isCompleted

    -   it not need to quantify washes. this is made by wash cycle module
    -   não completa, completa

-   wash-cycle

    > entity
    >
    > > id, numberOfWashes, vehicleId, startDate, endDate, completedWashes e note

-   vehicle
    > entity
    >
    > > id, licensePlate, driver, vehicleType
    -   proprietary may be a separated class, with a name and contact field.
    -   [ "Extra leve", "Leve", "Vuc", "Toco", "Truck", "Bitruck", "Carreta" ]
-   driver

    > entity
    >
    > > phones, name, vehicleIds, organizationId (pode ter mais de um caminhão)

    -   responsável direto pelo caminhão

-   organization

    > entity
    >
    > > [ "EMPRESA", "COOPERATIVA" ]

    -   Há um supervisor para cada cooperativa.
    -   Empresa: nome, telefone
    -   Cooperativa: nome, telefone

-   user
    > entity
    >
    > > id, name, password, role
    -   role: [ "ADMIN", "COLAB" ]
    -   colaborador só pode dar check e as anotações da lavagem.
-   notification

    > entity
    >
    > > id, recipientdId, content, readAt, createdAt

    -   notificação às 23h das atividades. Os carros lavados, os remarcados e os caminhões problemáticos.
    -   notificação às 6h das atividades do dia. Os carros que serão lavados no dia.

-   nota fiscal
    -   uma tabela que descreva o valor da nota, a empresa/cooperativa que ela pertence

#### database

    mongodb
    prisma

#### http

    express

#### notifications

    cron job function from **vercel**
