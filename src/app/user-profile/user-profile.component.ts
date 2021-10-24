import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  task: Task = new Task();
  constructor(private taskService: TaskService,
    private toastr: ToastrService) { }
  showNotification(from, align){

    const color = 1; //Math.floor((Math.random() * 5) + 1);

    switch(color){
      case 1:
      this.toastr.info('<span class="now-ui-icons ui-1_bell-53"></span> Tarea agregada <b> </b> exitosamente.', '', {
         timeOut: 8000,
         closeButton: true,
         enableHtml: true,
         toastClass: "alert alert-info alert-with-icon",
         positionClass: 'toast-' + from + '-' +  align
       });
      break;
      // case 2:
      // this.toastr.success('<span class="now-ui-icons ui-1_bell-53"></span> Welcome to <b>Now Ui Dashboard</b> - a beautiful freebie for every web developer.', '', {
      //    timeOut: 8000,
      //    closeButton: true,
      //    enableHtml: true,
      //    toastClass: "alert alert-success alert-with-icon",
      //    positionClass: 'toast-' + from + '-' +  align
      //  });
      // break;
      // case 3:
      // this.toastr.warning('<span class="now-ui-icons ui-1_bell-53"></span> Welcome to <b>Now Ui Dashboard</b> - a beautiful freebie for every web developer.', '', {
      //    timeOut: 8000,
      //    closeButton: true,
      //    enableHtml: true,
      //    toastClass: "alert alert-warning alert-with-icon",
      //    positionClass: 'toast-' + from + '-' +  align
      //  });
      // break;
      // case 4:
      // this.toastr.error('<span class="now-ui-icons ui-1_bell-53"></span> Welcome to <b>Now Ui Dashboard</b> - a beautiful freebie for every web developer.', '', {
      //    timeOut: 8000,
      //    enableHtml: true,
      //    closeButton: true,
      //    toastClass: "alert alert-danger alert-with-icon",
      //    positionClass: 'toast-' + from + '-' +  align
      //  });
      //  break;
      //  case 5:
      //  this.toastr.show('<span class="now-ui-icons ui-1_bell-53"></span> Welcome to <b>Now Ui Dashboard</b> - a beautiful freebie for every web developer.', '', {
      //     timeOut: 8000,
      //     closeButton: true,
      //     enableHtml: true,
      //     toastClass: "alert alert-primary alert-with-icon",
      //     positionClass: 'toast-' + from + '-' +  align
      //   });
      // break;
      default:
      break;
    }
}

  ngOnInit(): void {
  }


  saveTask(){
    this.taskService.createTask(this.task).subscribe( data =>{
      console.log(data);
    },
    error => console.log(error));
  }

  onSubmit(){
    console.log(this.task);
    this.saveTask();
  }

  goToGithubUrl(): void {
    window.location.href = 'https://github.com/Leyner-Andres-Bejarano-Palacios/java_springboot_docker_backend';
  }

  goToYoutubeUrl(): void {
    window.location.href = 'https://www.youtube.com/watch?v=vAizgtR4V7I&t=1s';
}


}
