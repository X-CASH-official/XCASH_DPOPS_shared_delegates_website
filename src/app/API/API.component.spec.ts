import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpdataService} from 'app/services/http-request.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { APIComponent } from './API.component';

describe('APIComponent', () => {
  let component: APIComponent;
  let fixture: ComponentFixture<APIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ APIComponent ],
      imports: [HttpClientTestingModule,RouterTestingModule],
      providers: [ HttpdataService ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(APIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // check that all html components are created
  it('should create', () => expect(component).toBeTruthy());

  it('should create profile card one', () => expect(fixture.debugElement.nativeElement.querySelector('#profilecard1')).toBeTruthy());
  it('should set profile card ones title', () => expect(fixture.debugElement.nativeElement.querySelector('#profilecard1').title).toBe('Statistics'));

  it('should create profile card two', () => expect(fixture.debugElement.nativeElement.querySelector('#profilecard2')).toBeTruthy());
  it('should set profile card twos title', () => expect(fixture.debugElement.nativeElement.querySelector('#profilecard2').title).toBe('Get Blocks Found'));

  it('should create profile card three', () => expect(fixture.debugElement.nativeElement.querySelector('#profilecard3')).toBeTruthy());
  it('should set profile card threes title', () => expect(fixture.debugElement.nativeElement.querySelector('#profilecard3').title).toBe('Get Public Address Information'));

  it('should create profile card four', () => expect(fixture.debugElement.nativeElement.querySelector('#profilecard4')).toBeTruthy());
  it('should set profile card fours title', () => expect(fixture.debugElement.nativeElement.querySelector('#profilecard4').title).toBe('Get Public Address Payment Information'));

  it('should create profile card five', () => expect(fixture.debugElement.nativeElement.querySelector('#profilecard5')).toBeTruthy());
  it('should set profile card fives title', () => expect(fixture.debugElement.nativeElement.querySelector('#profilecard5').title).toBe('Get Delegates Voters List'));
});
