create database otm;

create table patienten 
    (id serial, name varchar(50), vorname varchar (50),
     versicherungsnummer varchar(20), versicherung varchar(30));

/*to do:
    -produkt-table
    -gangbild-table