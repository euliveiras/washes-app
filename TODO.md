## frontend

### pages
- login/register 
- homepage

#### functionalities
- export table to CSV
- import CSV
- filtros de busca
    - licenseDriver, type, date, owner
    - verde como lavado, vermelho como não lavado, amarelo como data próxima

## backend 

### modules

#### application 
- wash
    > entity
    >> id, vehicleId, scheduleDate, cycleId, note, completed
    - it not need to quantify washes. this is made by wash cycle module
    - não completa, completa

- wash-cycle
    > entity
    >> id, numberOfWashes, vehicleId, rangeDate, completedWashes e note 

- vehicle
    > entity
    >> id, licensePlate, proprietary(empresa, cooperativa), motorista(dono do caminhão), vehicleType
    - proprietary may be a separated class, with a name and contact field.
    - [ "Extra leve", "Leve", "Vuc", "Toco", "Truck", "Bitruck", "Carreta" ]
    
- motorista
    > entity
    >> telefone, nome, id do veículo (pode ter mais de um caminhão)
    - responsável direto pelo caminhão

- owner
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

