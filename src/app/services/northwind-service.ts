import { EmployeesType } from '../models/Northwind/employees-type';
import { Northwind } from '../static-data/northwind';

class NorthwindService {
  public getEmployees(): EmployeesType[] {
    return Northwind['EmployeesType'];
  }
}
export const northwindService: NorthwindService = new NorthwindService();
