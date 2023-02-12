import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDocumentationComponent } from './add-documentation.component';

describe('AddDocumentationComponent', () => {
  let component: AddDocumentationComponent;
  let fixture: ComponentFixture<AddDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDocumentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
