import {
  Component,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ToasterNotifierService } from 'src/app/shared/toaster-notifier.service';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  @ViewChild('inloged')
  inloged!: TemplateRef<HTMLElement>;
  loginForm: FormGroup = new FormGroup({});
  Subscription: Subscription = new Subscription();
  token: string = '';
  showErrorMessage = false;
  user = {
    id: 0,
    firstName: '',
    lastName: '',
    role: '',
    img: '',
  };
  constructor(
    private authService: AuthServiceService,
    private router: Router,
    public dialog: MatDialog,
    private notificationService: ToasterNotifierService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
  submit() {
    this.notificationService.showNotification(
      'Logged Successfuly',
      'ok',
      'success'
    );
    this.router.navigate(['/dashboard/users-list']);
    // this.Subscription.add(
    //   this.authService.login(this.loginForm.value).subscribe(
    //     (res: any) => {

    //     },
    //     (err) => {
    //       this.openDialog();
    //     }
    //   )
    // );
  }

  openDialog() {
    const dialogRef = this.dialog.open(this.inloged);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }
}
