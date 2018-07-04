
import { Injectable } from '@angular/core';

@Injectable()
export class EngineerIncidentService {

    constructor(

    ) { }

    getIncidentsOfEngineers() {

        return {
            assigned: [
                {
                    img: 'https://cdn-live-wwf0uvrcwyr9hig.stackpathdns.com/media/catalog/product/cache/1/small_image/230x210/0dc2d03fe217f8c83829496872af24a0/1/_/1_2.jpg',
                name: 'Dr. Aquaguard M  agna NXT HD RO', category: 'Water Purifier', regDate: 'Sep 12,2016',purDate:'Jun 4 2016',warranty:'2 years',regNo:'AD12345',mrp:'₹16,990',
                status:'NotScheduled',dealer:{name:'Lotus Dealers Pvt Ltd', address:'Noida Sec 3',phone:'9874563214'},
                    customer: {
                        name: 'Akash Singh',
                        phone: '8578912356',
                        address: 'AD-23, Vikas Puri'
                    },
                    incident: {
                        status: 'Engineer Assigned', created: '1 day ago', description: "Product's display not working properly", scheduledDate: '11:00 AM, 24 May 2018',
                        engineer: { name: 'Mukesh Kumar', phone: '8965471235' },
                        rejectReason: 'Product is out of warranty',
                        images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_tZn7f6OQ2SLG4EguSdCzYPsMjJzURiUuso6wcqvc7EbnMC883A', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5OBu3oV53dJWzc-HUyzChgolbkOm7VtSrtKXH_IHuwDRPE0fs3g']
                    }
                },
                {
                    img: 'https://cdn-live-wwf0uvrcwyr9hig.stackpathdns.com/media/catalog/product/cache/1/small_image/230x210/0dc2d03fe217f8c83829496872af24a0/e/u/eureka_forbes_vc-7023-min_1.jpg',
                name: 'Euro Health Clean', category: 'Vaccum Cleaner', regDate: 'Oct 12,2015',purDate:'Jun 4 2014',warranty:'1 years',regNo:'AD12347',mrp:'₹6,990',
                status:'Scheduled',dealer:{name:'American Dealers Pvt Ltd', address:'Gurugram Sec 3',phone:'9833563214'},
                    customer: {
                        name: 'Rahul Verma',
                        phone: '8278912356',
                        address: 'AD-23, Vikas Puri'
                    },
                    incident: {
                        status: 'Engineer Assigned', created: '1 day ago', description: "Product's display not working properly", scheduledDate: '11:00 AM, 24 May 2018',
                        engineer: { name: 'Ramesh Sharma', phone: '8865671235' },
                        rejectReason: 'Product is out of warranty',
                        images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_tZn7f6OQ2SLG4EguSdCzYPsMjJzURiUuso6wcqvc7EbnMC883A', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5OBu3oV53dJWzc-HUyzChgolbkOm7VtSrtKXH_IHuwDRPE0fs3g']
                    }
                },
                {
                    img: 'https://cdn-live-wwf0uvrcwyr9hig.stackpathdns.com/media/catalog/product/cache/1/small_image/230x210/0dc2d03fe217f8c83829496872af24a0/i/-/i-view-ip-400_vf__1.jpg',
                name: 'Eurovigil I View IP 400', category: 'CCTV camera', regDate: 'Oct 12,2015',purDate:'Oct 15,2013',warranty:'3 years',regNo:'AD12347',mrp:'₹29,990',
                status:'Scheduled',dealer:{name:'American Dealers Pvt Ltd', address:'Gurugram Sec 3',phone:'9833563214'},
                    customer: {
                        name: 'Ajay Malhotra',
                        phone: '8278912356',
                        address: 'AD-23, Vikas Puri'
                    },
                    incident: {
                        status: 'Engineer Assigned', created: '2 day ago', description: "Camera's recording not working properly", scheduledDate: '11:00 AM, 24 May 2018',
                        engineer: { name: 'Ramesh Sharma', phone: '8865671235' },
                        rejectReason: 'Product is out of warranty',
                        images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_tZn7f6OQ2SLG4EguSdCzYPsMjJzURiUuso6wcqvc7EbnMC883A', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5OBu3oV53dJWzc-HUyzChgolbkOm7VtSrtKXH_IHuwDRPE0fs3g']
                    }
                },
                {
                    img: 'https://cdn-live-wwf0uvrcwyr9hig.stackpathdns.com/media/catalog/product/cache/1/small_image/230x210/0dc2d03fe217f8c83829496872af24a0/4/_/4_zone.png',
                name: 'Eurovigil 4 Zone Conventional Panel', category: 'Fire Alarm System', regDate: 'Oct 12,2015',purDate:'Oct 19,2017',warranty:'5 years',regNo:'AD12347',mrp:'14,500',
                status:'Scheduled',dealer:{name:'American Dealers Pvt Ltd', address:'Gurugram Sec 3',phone:'9833563214'},
                    customer: {
                        name: 'Ajay Malhotra',
                        phone: '8278912356',
                        address: 'AD-23, Vikas Puri'
                    },
                    incident: {
                        status: 'Engineer Assigned', created: '3 day ago', description: "Camera's recording not working properly", scheduledDate: '11:00 AM, 24 May 2018',
                        engineer: { name: 'Ramesh Sharma', phone: '8865671235' },
                        rejectReason: 'Product is out of warranty',
                        images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_tZn7f6OQ2SLG4EguSdCzYPsMjJzURiUuso6wcqvc7EbnMC883A', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5OBu3oV53dJWzc-HUyzChgolbkOm7VtSrtKXH_IHuwDRPE0fs3g']
                    }
                }
            ],
            scheduled: [
                {
                    img: 'https://cdn-live-wwf0uvrcwyr9hig.stackpathdns.com/media/catalog/product/cache/1/small_image/230x210/0dc2d03fe217f8c83829496872af24a0/s/c/scpr300.jpg',
                    name: 'Dr. Aeroguard SCPR 300', category: 'Air Purifier', regDate: 'Oct 12,2013',purDate:'Jun 4 2013',warranty:'1 years',regNo:'AD12347',mrp:'₹13,990',
                    status:'Installed',dealer:{name:'Sufik Dealers Pvt Ltd', address:'Gurugram Sec 45',phone:'9133563214'},
                    customer: {
                        name: 'Akash Singh',
                        phone: '8578912356',
                        address: 'AD-23, Vikas Puri'
                    },
                    incident: {
                        status: 'Scheduled', created: '1 day ago', description: "Product's display not working properly", scheduledDate: '11:00 AM, 24 May 2018',
                        engineer: { name: 'Mukesh Kumar', phone: '8965471235' },
                        rejectReason: 'Product is out of warranty',
                        images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_tZn7f6OQ2SLG4EguSdCzYPsMjJzURiUuso6wcqvc7EbnMC883A', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5OBu3oV53dJWzc-HUyzChgolbkOm7VtSrtKXH_IHuwDRPE0fs3g']
                    }
                },
                {
                    img: 'https://cdn-live-wwf0uvrcwyr9hig.stackpathdns.com/media/catalog/product/cache/1/small_image/230x210/0dc2d03fe217f8c83829496872af24a0/5/s/5s-1.jpg',
                name: '5 Star Inverter Split AC – 1.00 T', category: 'Health Conditioners', regDate: 'Oct 12,2013', purDate: 'Oct 4 2016', warranty: '5 years', regNo: 'AD12347', mrp: '₹52,990.00',
                status: 'ProblemInInstallation', dealer: { name: 'AC Dealers Pvt Ltd', address: 'Rohini Sec 45', phone: '9133563214' },
                    customer: {
                        name: 'Rahul Verma',
                        phone: '8278912356',
                        address: 'AD-23, Vikas Puri'
                    },
                    incident: {
                        status: 'Scheduled', created: '1 day ago', description: "Product's display not working properly", scheduledDate: '01:00 PM, 24 May 2018',
                        engineer: { name: 'Ramesh Sharma', phone: '8865671235' },
                        rejectReason: 'Product is out of warranty',
                        images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_tZn7f6OQ2SLG4EguSdCzYPsMjJzURiUuso6wcqvc7EbnMC883A', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5OBu3oV53dJWzc-HUyzChgolbkOm7VtSrtKXH_IHuwDRPE0fs3g']
                    }
                },
                {
                    img: 'https://cdn-live-wwf0uvrcwyr9hig.stackpathdns.com/media/catalog/product/cache/1/small_image/230x210/0dc2d03fe217f8c83829496872af24a0/c/a/cartridge_1500.jpg',
                name: 'Aquasure 1500 litre cartridge', category: 'Cartridge', regDate: 'Oct 12,2015',purDate:'Oct 15,2013',warranty:'3 years',regNo:'AD12347',mrp:'₹29,990',
                status:'Scheduled',dealer:{name:'American Dealers Pvt Ltd', address:'Gurugram Sec 3',phone:'9833563214'},
                    customer: {
                        name: 'Ajay Malhotra',
                        phone: '8278912356',
                        address: 'AD-23, Vikas Puri'
                    },
                    incident: {
                        status: 'Engineer Assigned', created: '1 day ago', description: "Camera's recording not working properly", scheduledDate: '11:00 AM, 24 May 2018',
                        engineer: { name: 'Ramesh Sharma', phone: '8865671235' },
                        rejectReason: 'Product is out of warranty',
                        images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_tZn7f6OQ2SLG4EguSdCzYPsMjJzURiUuso6wcqvc7EbnMC883A', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5OBu3oV53dJWzc-HUyzChgolbkOm7VtSrtKXH_IHuwDRPE0fs3g']
                    }
                },
                {
                    img: 'https://cdn-live-wwf0uvrcwyr9hig.stackpathdns.com/media/catalog/product/cache/1/small_image/230x210/0dc2d03fe217f8c83829496872af24a0/p/i/pir-motion-sensor_l.png',
                name: 'PIR Motion Sensor', category: 'Sensors System', regDate: 'Oct 12,2015',purDate:'Oct 19,2017',warranty:'5 years',regNo:'AD12347',mrp:'14,500',
                status:'Scheduled',dealer:{name:'American Dealers Pvt Ltd', address:'Gurugram Sec 3',phone:'9833563214'},
                    customer: {
                        name: 'Ajay Malhotra',
                        phone: '8278912356',
                        address: 'AD-23, Vikas Puri'
                    },
                    incident: {
                        status: 'Engineer Assigned', created: '1 day ago', description: "Camera's recording not working properly", scheduledDate: '11:00 AM, 24 May 2018',
                        engineer: { name: 'Ramesh Sharma', phone: '8865671235' },
                        rejectReason: 'Product is out of warranty',
                        images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_tZn7f6OQ2SLG4EguSdCzYPsMjJzURiUuso6wcqvc7EbnMC883A', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5OBu3oV53dJWzc-HUyzChgolbkOm7VtSrtKXH_IHuwDRPE0fs3g']
                    }
                }
            ],
            fixed: [   
                {
                    img: 'https://cdn-live-wwf0uvrcwyr9hig.stackpathdns.com/media/catalog/product/cache/1/small_image/230x210/0dc2d03fe217f8c83829496872af24a0/3/2/320x400_thor.png',
                name: 'Aquaguard On The Go Avengers Series Thor', category: 'Water Purifiers', regDate: 'Oct 12,2015', purDate: 'Jun 4 2014', warranty: '1 years', regNo: 'AD12347', mrp: '₹650',
                status: 'Installed', dealer: { name: 'XYZ Dealers Pvt Ltd', address: 'Gurugram Sec 3', phone: '9833563214' },
                    customer: {
                        name: 'Akash Singh',
                        phone: '8578912356',
                        address: 'AD-23, Vikas Puri'
                    },
                    incident: {
                        status: 'Fixed', created: '1 day ago', description: "Product's display not working properly", scheduledDate: '11:00 AM, 24 May 2018',
                        engineer: { name: 'Mukesh Kumar', phone: '8965471235' },
                        rejectReason: 'Product is out of warranty',
                        images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_tZn7f6OQ2SLG4EguSdCzYPsMjJzURiUuso6wcqvc7EbnMC883A', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5OBu3oV53dJWzc-HUyzChgolbkOm7VtSrtKXH_IHuwDRPE0fs3g'],
                        fixed:{
                            date:'10:40 AM, 25 Jun 2018',
                            images:['https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTwq5NJo6FWkhICt7QKo30d_GDW3Igs61oc8xJjUv-I8p4yAgBkYUFhDA9PfRbkGm5OcCMc1_aN&usqp=CAc'],
                            comment:'Product had minor fault in IC. Changed the IC. jhgkhkhbhjb',
                            signature:'data:image/png;base64,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'
                        },     
                        feedback:{
                            stars:'4',
                            comment:'Engineer did a good job .'
                        }
                        
                    }
                },
                {
                    img: 'https://cdn-live-wwf0uvrcwyr9hig.stackpathdns.com/media/catalog/product/cache/1/small_image/230x210/0dc2d03fe217f8c83829496872af24a0/e/u/eureka_forbes-wp-8664-min.jpg',
                name: 'Aquaguard Enhance Green RO', category: 'Water Purifiers', regDate: 'Sep 12,2016', purDate: 'Jun 4 2016', warranty: '2 years', regNo: 'AD12345', mrp: '₹25000',
                status: 'NotScheduled', dealer: { name: 'ABC Dealers Pvt Ltd', address: 'Noida Sec 3', phone: '9874563214' },
                    customer: {
                        name: 'Rahul Verma',
                        phone: '8278912356',
                        address: 'AD-23, Vikas Puri'
                    },
                    incident: {
                        status: 'Fixed', created: '1 day ago', description: "Product's display not working properly", scheduledDate: '11:00 AM, 24 May 2018',
                        engineer: { name: 'Ramesh Sharma', phone: '8865671235' },
                        rejectReason: 'Product is out of warranty',
                        images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_tZn7f6OQ2SLG4EguSdCzYPsMjJzURiUuso6wcqvc7EbnMC883A', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5OBu3oV53dJWzc-HUyzChgolbkOm7VtSrtKXH_IHuwDRPE0fs3g'],
                        fixed:{
                            date:'05:00 PM, 27 Jun 2018',
                            images:['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkClxoKpZBTqVw_MlQwb5T-pFYLFD7M9QE1T3VxxW4RN4NvYaE'],
                            comment:'Product had minor fault in IC. Changed the IC.',
                            signature:'data:image/png;base64,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'
                        },
                        feedback:{
                            stars:'2',
                            comment:"Engineer's couldn't solve the issue completely."
                        }
                    }
                },
                {
                    img: 'https://cdn-live-wwf0uvrcwyr9hig.stackpathdns.com/media/catalog/product/cache/1/small_image/230x210/0dc2d03fe217f8c83829496872af24a0/4/_/4_zone.png',
                name: 'Eurovigil 4 Zone Conventional Panel', category: 'Fire Alarm Systems', regDate: 'Sep 12,2016', purDate: 'Jun 4 2016', warranty: '2 years', regNo: 'AD12345', mrp: '₹25000',
                status: 'NotScheduled', dealer: { name: 'ABC Dealers Pvt Ltd', address: 'Noida Sec 3', phone: '9874563214' },
                    customer: {
                        name: 'Rahul Verma',
                        phone: '8278912356',
                        address: 'AD-23, Vikas Puri'
                    },
                    incident: {
                        status: 'Fixed', created: '1 day ago', description: "Product's display not working properly", scheduledDate: '11:00 AM, 24 May 2018',
                        engineer: { name: 'Ramesh Sharma', phone: '8865671235' },
                        rejectReason: 'Product is out of warranty',
                        images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_tZn7f6OQ2SLG4EguSdCzYPsMjJzURiUuso6wcqvc7EbnMC883A', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5OBu3oV53dJWzc-HUyzChgolbkOm7VtSrtKXH_IHuwDRPE0fs3g'],
                        fixed:{
                            date:'05:00 PM, 28 Jun 2018',
                            images:['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkClxoKpZBTqVw_MlQwb5T-pFYLFD7M9QE1T3VxxW4RN4NvYaE'],
                            comment:'Product had minor fault in IC. Changed the IC.',
                            signature:'data:image/png;base64,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'
                        },
                        feedback:{
                            stars:'2',
                            comment:"Engineer's couldn't solve the issue completely."
                        }
                    }
                }
            ]
        };

    }  

}

