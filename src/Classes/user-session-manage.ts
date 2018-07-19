import { AlertController, Events, App, MenuController } from 'ionic-angular';
import { AuthService } from '../providers/auth.service';
import { NetworkService } from '../providers/network.service';

import { CustomService } from '../providers/custom.service';

export class UserSessionManage {

    rootPage: any;
    sideMenuOptions: Array<any>;
    userImage: string;
    userName: string;

    constructor(
        public events: Events,
        public appCtrl: App,
        public authService: AuthService,
        public alertCtrl: AlertController,
        public networkService: NetworkService,
        public menu: MenuController,
        public customService: CustomService,
    ) {

        this.handleEvents();
        this.networkService.checkNetworkStatus();
        this.hasLoggedIn();
    }

    public handleEvents() {
        this.events.subscribe('user:login', () => {
            this.login();
        });
      
        this.events.subscribe('user:logout', () => {
            this.logout();
        });
        this.events.subscribe("offline", () => {
            this.offline();
        });
        this.events.subscribe("online", () => {
            this.online();
        });
        this.events.subscribe("user:image", () => {
            this.imageUpdate();
        });
    }


    public hasLoggedIn() {
        if (this.authService.isLoggedIn()) {
            this.authService.fetchUserDetails()
                .subscribe((res) => {
                    // no need to do any thing as userdetails would have been saved in service
                    this.rootPage = "HomePage";
                    this.decideSideMenuContent();
                    this.menu.enable(true);
                    // this.enablePushNotifications();
                }, (err: any) => {
                    this.customService.showToast('Some error occured, Please Reopen the App or Logout');
                });

        } else {
            this.rootPage = "LoginPage";
        }
    }

    public login() {
        // this.setRootPage();
        this.appCtrl.getRootNavs()[0].setRoot("HomePage",{},{animate:true,direction:'forward'});
        this.decideSideMenuContent();
        this.menu.enable(true);
        // this.enablePushNotifications();
        // this.imageUpdate();
    }

    // enablePushNotifications() {
    //     this.pushMsgService.initializeFCM();
    // }


    decideSideMenuContent() {

        this.sideMenuOptions = [

            { title: 'Home', component: "HomePage", icon: 'home' },
            { title: 'Installations', component: "InstallationsPage", icon: 'build' },
            { title: 'Incidents', component: "IncidentsPage", icon: 'megaphone' },
            { title: 'Logout', component: 'NA', icon: 'log-out' }
        ];

    }

    public imageUpdate() {

        this.userImage = JSON.parse(localStorage.getItem('userInfo')).picUrl;
        this.userName = JSON.parse(localStorage.getItem('userInfo')).username || '';
    }

    public logout() {

        localStorage.clear();
        
        // URLPREFIX = undefined;
        // ROLE = undefined;
        this.appCtrl.getRootNavs()[0].setRoot("LoginPage",{},{animate:true,direction:'forward'});
    }

    public offline() {
        // if (this.authService.isLoggedIn()) {

        //     this.appCtrl.getRootNavs()[0].setRoot(NoInternet);
        // }
    }

    public online() {
        // if (this.authService.isLoggedIn()) {
        //     this.login();
        // } else {
        //     this.logout();
        // }
    }



}


