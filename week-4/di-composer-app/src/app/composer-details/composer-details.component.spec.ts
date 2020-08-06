/**
 * Title: composer-details.component.spec.ts
 * Author: Chris Bohnet
 * Date: 31 July 2020
 * Description: composer details component spec file
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposerDetailsComponent } from './composer-details.component';

describe('ComposerDetailsComponent', () => {
  let component: ComposerDetailsComponent;
  let fixture: ComponentFixture<ComposerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComposerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
