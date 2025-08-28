import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFrom } from './register.component';

describe('RegisterFrom', () => {
  let component: RegisterFrom;
  let fixture: ComponentFixture<RegisterFrom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterFrom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterFrom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
