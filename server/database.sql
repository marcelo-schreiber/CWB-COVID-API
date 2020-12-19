CREATE DATABASE covid19;

CREATE TABLE cwb (
    id BIGSERIAL PRIMARY KEY,
    flag VARCHAR(8) NOT NULL,
    total_recovered INTEGER CHECK (total_recovered >= 0) NOT NULL,
    total_active INTEGER CHECK (total_active >= 0) NOT NULL,
    total_confirmed INTEGER CHECK (total_confirmed >= 0) NOT NULL,
    total_deaths INTEGER CHECK (total_deaths >= 0) NOT NULL,
    hospital_ocupation VARCHAR(4) NOT NULL,
    avaliable_hospital_beds INTEGER CHECK (avaliable_hospital_beds >= 0) NOT NULL,
    dateupdate VARCHAR(11) NOT NULL
);

-- INSERT INTO cwb (flag, total_recovered, total_active, total_confirmed, total_deaths, hospital_ocupation,avaliable_hospital_beds,dateupdate) 
-- VALUES ('laranja', 83061, 12947, 97993, 1985, '92%', 31, '2020-12-15');

-- INSERT INTO cwb (flag, total_recovered, total_active, total_confirmed, total_deaths, hospital_ocupation,avaliable_hospital_beds,dateupdate)
-- VALUES ('laranja', 85862, 12602, 99470, 2006, '87%', 48, '2020-12-16');

-- INSERT INTO cwb (flag, total_recovered, total_active, total_confirmed, total_deaths, hospital_ocupation, avaliable_hospital_beds, dateupdate)
-- VALUES ('laranja', 86061, 12392, 100482, 2029, '87%', 48, '2020-12-17');
