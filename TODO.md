## frontend

### pages
- login/register 
	- clerk provider
- homepage
	- table filter's
		- date range
		- input to search a vehicle licensePlate 

#### functionalities
- export table to CSV
- import CSV
- filtros de busca
    - licenseDriver, type, date, owner
    - verde como lavado, vermelho como não lavado, amarelo como data próxima

## backend 

### todo
    [ ] search for license plate
        if founded
            [ ] search for active wash cycle
            if founded
                [ ] search for a wash
                if founded
                     [ ] prompt user to confirm wash
                else
                    [ ] create a wash
            else
                [ ] create wash cycle

        else 
            driver???
            [ ] create vehicle
            [ ] prompt user to create a organization
                [ ] search for organization
                    if not founded
                        [ ] create organization
            [ ] prompt user to create wash cycle
            [ ] prompt user to create wash
            [ ] create wash-cycle
            [ ] create wash

    [ ] transform driver module into a Vehicle prop
    [ ] search a active wash-cycle for the given licensePlate. 
        if founded active wash-cycle
        [ ] search for most recently scheduled wash for the given licensePlate.
    [ ] create organization use case
    [ ] find organization use case
    [ ] create organization repository
### modules


#### application 
- wash
    > entity
    >> id, vehicleId, scheduledDate, cycleId, note, isCompleted
    - it not need to quantify washes. this is made by wash cycle module
    - não completa, completa

- wash-cycle
    > entity
    >> id, numberOfWashes, vehicleId, startDate, endDate, completedWashes e note 

- vehicle
    > entity
    >> id, licensePlate, driver, vehicleType
    - proprietary may be a separated class, with a name and contact field.
    - [ "Extra leve", "Leve", "Vuc", "Toco", "Truck", "Bitruck", "Carreta" ]
    
- driver
    > entity
    >> phones, name, vehicleIds, organizationId (pode ter mais de um caminhão)
    - responsável direto pelo caminhão

- organization
    > entity
    >> [ "EMPRESA", "COOPERATIVA" ]
    - Há um supervisor para cada cooperativa. 
    - Empresa: nome, telefone
    - Cooperativa: nome, telefone

- user
    > entity
    >> id, name, password, role
    - role: [ "ADMIN", "COLAB" ]
    - colaborador só pode dar check e as anotações da lavagem.
    
- notification
    > entity
    >> id, recipientdId, content, readAt, createdAt
    - notificação às 23h das atividades. Os carros lavados, os remarcados e os caminhões problemáticos.
    - notificação às 6h das atividades do dia. Os carros que serão lavados no dia.

- nota fiscal
    - uma tabela que descreva o valor da nota, a empresa/cooperativa que ela pertence

#### database 
    mongodb
    prisma

#### http 
    express

#### notifications
    cron job function from **vercel**



