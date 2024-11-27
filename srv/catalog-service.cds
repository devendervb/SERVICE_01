using { db } from '../db/data-model';

service MyService {

    entity Customer as projection on db.customer;

}
