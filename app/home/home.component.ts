import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
        (<any>window).myWidgetParam ? (<any>window).myWidgetParam : (<any>window).myWidgetParam = [];
        (<any>window).myWidgetParam.push({
            id: 15,
            cityid: '5128581',
            appid: '9dc57c5e4bd97598a68e730d77e4e4a1',
            units: 'metric',
            containerid: 'openweathermap-widget-15',
        });
        (function () {
            let script = document.createElement('script');
            script.async = true;
            script.src = "https://openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
            let s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(script, s);
        })();
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }
}