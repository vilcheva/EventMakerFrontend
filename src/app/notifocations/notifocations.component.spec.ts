import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifocationsComponent } from './notifocations.component';

describe('NotifocationsComponent', () => {
  let component: NotifocationsComponent;
  let fixture: ComponentFixture<NotifocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotifocationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotifocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
