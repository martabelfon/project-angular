import { ApiService } from './../../shared/services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-documentation',
  templateUrl: './add-documentation.component.html',
  styleUrls: ['./add-documentation.component.scss'],
})
export class AddDocumentationComponent implements OnInit {
  addForm!: any;
  formulary!: any;
  submited: boolean = false;

  constructor(
    private form: FormBuilder,
    private api: ApiService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.addForm = this.form.group({
      img: ['', [Validators.required, Validators.minLength(10)]],
      title: ['', [Validators.required, Validators.minLength(5)]],
      author: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', [Validators.required]],
      url: ['', [Validators.required, Validators.minLength(10)]],
    });
    this.addForm.valueChanges.subscribe((data: any) => {
      this.formulary = data;
    });
  }
  addFormulary() {
    this.submited = true;
    if (this.addForm.valid) {
      let newForm: any = this.formulary;
      console.log(newForm)
      this.api.postFormulary(newForm).subscribe((res) => {
        console.log(res);
        this.addForm.reset();
        this.submited = false;
        this.route.navigate(["/documentation"])
      });
    }
  }
}
