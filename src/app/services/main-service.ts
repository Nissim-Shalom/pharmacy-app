import { Injectable } from '@angular/core';
import { items } from '../components/data/constant';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  dataSource = items;
constructor() { }

user = {
  name: '',
  password: '',
  otp: '',
  order: [],
};

existData = {
  name: 'nshalom',
  password: '1234',
  otp:'7777'
};

  login(username: string, password: string, otp: string) {
    if (username === this.existData.name && password === this.existData.password && otp === this.existData.otp) {
        this.user.name = username;
        this.user.otp = otp;
        this.user.password = password;
      return true;
    }
    return false;
  }


}
