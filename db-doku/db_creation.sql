create database otm;

create table patienten 
    (id serial, name varchar(50), vorname varchar (50),
     versicherungsnummer varchar(20), versicherung varchar(30));

/*to do:
    -produkt-table
    -gangbild-table
*/
create or replace function insert_patientdata(lastname varchar, name varchar, insurNr varchar, insurName varchar)
returns void as
$$
insert into patienten (name, vorname, versicherungsnummer, versicherung)
values (lastname, name, insurNr, insurName)
$$

language sql