import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeusComponent } from './zeus.component';

describe('ZeusComponent', () => {
  let component: ZeusComponent;
  let fixture: ComponentFixture<ZeusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZeusComponent]
    });
    fixture = TestBed.createComponent(ZeusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
