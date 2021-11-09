(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inbox-inbox-module"],{

/***/ "5gel":
/*!***************************************!*\
  !*** ./src/app/inbox/inbox.module.ts ***!
  \***************************************/
/*! exports provided: InboxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxModule", function() { return InboxModule; });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _inbox_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inbox-routing.module */ "zxsJ");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "FK5R");
/* harmony import */ var _email_reply_email_reply_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./email-reply/email-reply.component */ "c1j3");
/* harmony import */ var _email_show_email_show_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./email-show/email-show.component */ "w6lD");
/* harmony import */ var _email_create_email_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./email-create/email-create.component */ "Xr0D");
/* harmony import */ var _email_index_email_index_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./email-index/email-index.component */ "oD8o");
/* harmony import */ var _placeholder_placeholder_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./placeholder/placeholder.component */ "BVxh");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./not-found/not-found.component */ "tO32");
/* harmony import */ var _email_form_email_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./email-form/email-form.component */ "DEJV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");














class InboxModule {
}
InboxModule.ɵfac = function InboxModule_Factory(t) { return new (t || InboxModule)(); };
InboxModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: InboxModule });
InboxModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _inbox_routing_module__WEBPACK_IMPORTED_MODULE_3__["InboxRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](InboxModule, { declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _email_reply_email_reply_component__WEBPACK_IMPORTED_MODULE_5__["EmailReplyComponent"],
        _email_show_email_show_component__WEBPACK_IMPORTED_MODULE_6__["EmailShowComponent"],
        _email_create_email_create_component__WEBPACK_IMPORTED_MODULE_7__["EmailCreateComponent"],
        _email_index_email_index_component__WEBPACK_IMPORTED_MODULE_8__["EmailIndexComponent"],
        _placeholder_placeholder_component__WEBPACK_IMPORTED_MODULE_9__["PlaceholderComponent"],
        _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundComponent"],
        _email_form_email_form_component__WEBPACK_IMPORTED_MODULE_11__["EmailFormComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _inbox_routing_module__WEBPACK_IMPORTED_MODULE_3__["InboxRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "BVxh":
/*!************************************************************!*\
  !*** ./src/app/inbox/placeholder/placeholder.component.ts ***!
  \************************************************************/
/*! exports provided: PlaceholderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceholderComponent", function() { return PlaceholderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class PlaceholderComponent {
    constructor() { }
    ngOnInit() {
    }
}
PlaceholderComponent.ɵfac = function PlaceholderComponent_Factory(t) { return new (t || PlaceholderComponent)(); };
PlaceholderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlaceholderComponent, selectors: [["app-placeholder"]], decls: 4, vars: 0, consts: [[1, "ui", "placeholder", "segment"], [1, "ui", "icon", "header"], [1, "envelope", "outline", "icon"]], template: function PlaceholderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Select an email to get started! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbGFjZWhvbGRlci5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "DEJV":
/*!**********************************************************!*\
  !*** ./src/app/inbox/email-form/email-form.component.ts ***!
  \**********************************************************/
/*! exports provided: EmailFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailFormComponent", function() { return EmailFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_input_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/input/input.component */ "9odQ");





class EmailFormComponent {
    constructor() {
        this.emailForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
        this.emailSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.submitted = false;
    }
    ngOnInit() {
        const { subject, from, to, text } = this.email;
        this.emailForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            to: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](to, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            from: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: from, disabled: true }),
            subject: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](subject, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            text: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](text, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    }
    abs(abs) {
        return abs;
    }
    onSubmit() {
        if (this.emailForm.invalid) {
            return;
        }
        this.submitted = true;
        this.emailSubmit.emit(this.emailForm.getRawValue());
    }
}
EmailFormComponent.ɵfac = function EmailFormComponent_Factory(t) { return new (t || EmailFormComponent)(); };
EmailFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmailFormComponent, selectors: [["app-email-form"]], inputs: { email: "email", submitted: "submitted" }, outputs: { emailSubmit: "emailSubmit" }, decls: 7, vars: 6, consts: [[1, "ui", "form", 3, "formGroup", "ngSubmit"], ["inputType", "email", "label", "To", 3, "control"], ["inputType", "email", "label", "From", 3, "control"], ["inputType", "text", "label", "Subject", 3, "control"], ["controlType", "textarea", "label", "Text", 3, "control"], ["type", "submit", 1, "ui", "primary", "button", 3, "disabled"]], template: function EmailFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EmailFormComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.emailForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.abs(ctx.emailForm.get("to")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.abs(ctx.emailForm.get("from")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.abs(ctx.emailForm.get("subject")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.abs(ctx.emailForm.get("text")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.submitted);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _shared_input_input_component__WEBPACK_IMPORTED_MODULE_2__["InputComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbWFpbC1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "FK5R":
/*!**********************************************!*\
  !*** ./src/app/inbox/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _email_create_email_create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../email-create/email-create.component */ "Xr0D");
/* harmony import */ var _email_index_email_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../email-index/email-index.component */ "oD8o");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 6, vars: 0, consts: [[1, "ui", "grid", "stackable"], [1, "five", "wide", "column"], [1, "eleven", "wide", "column"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-email-create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-email-index");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_email_create_email_create_component__WEBPACK_IMPORTED_MODULE_1__["EmailCreateComponent"], _email_index_email_index_component__WEBPACK_IMPORTED_MODULE_2__["EmailIndexComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "M3S3":
/*!*************************************************!*\
  !*** ./src/app/inbox/email-resolver.service.ts ***!
  \*************************************************/
/*! exports provided: EmailResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailResolverService", function() { return EmailResolverService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _email_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./email.service */ "y1T3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





class EmailResolverService {
    constructor(emailService, router) {
        this.emailService = emailService;
        this.router = router;
    }
    resolve(route) {
        const { id } = route.params;
        return this.emailService.getEmail(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(() => {
            this.router.navigateByUrl('/inbox/not-found');
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["EMPTY"];
        }));
    }
}
EmailResolverService.ɵfac = function EmailResolverService_Factory(t) { return new (t || EmailResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_email_service__WEBPACK_IMPORTED_MODULE_3__["EmailService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
EmailResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: EmailResolverService, factory: EmailResolverService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Xr0D":
/*!**************************************************************!*\
  !*** ./src/app/inbox/email-create/email-create.component.ts ***!
  \**************************************************************/
/*! exports provided: EmailCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailCreateComponent", function() { return EmailCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/auth/auth.service */ "qXBG");
/* harmony import */ var _email_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../email.service */ "y1T3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/modal/modal.component */ "0zEo");
/* harmony import */ var _email_form_email_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../email-form/email-form.component */ "DEJV");






function EmailCreateComponent_app_modal_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-modal", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dismiss", function EmailCreateComponent_app_modal_2_Template_app_modal_dismiss_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.showModal = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Compose");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-email-form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("emailSubmit", function EmailCreateComponent_app_modal_2_Template_app_email_form_emailSubmit_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onSubmit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("email", ctx_r0.email)("submitted", ctx_r0.submitted);
} }
class EmailCreateComponent {
    constructor(authService, emailService) {
        this.authService = authService;
        this.emailService = emailService;
        this.showModal = false;
        this.submitted = false;
        this.email = {
            id: '',
            to: '',
            subject: '',
            html: '',
            text: '',
            from: `${authService.username}@angular-email.com`,
        };
    }
    ngOnInit() { }
    onSubmit(email) {
        // Send the email off via the email service
        console.log('reaching here', email);
        this.emailService.sendEmail(email).subscribe((email) => {
            this.showModal = false;
            this.submitted = false;
        });
    }
}
EmailCreateComponent.ɵfac = function EmailCreateComponent_Factory(t) { return new (t || EmailCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_email_service__WEBPACK_IMPORTED_MODULE_2__["EmailService"])); };
EmailCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmailCreateComponent, selectors: [["app-email-create"]], decls: 3, vars: 1, consts: [[1, "ui", "button", "primary", "fluid", 3, "click"], [3, "dismiss", 4, "ngIf"], [3, "dismiss"], ["modalTitle", ""], [3, "email", "submitted", "emailSubmit"]], template: function EmailCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailCreateComponent_Template_button_click_0_listener() { return ctx.showModal = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Compose");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmailCreateComponent_app_modal_2_Template, 4, 2, "app-modal", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showModal);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"], _email_form_email_form_component__WEBPACK_IMPORTED_MODULE_5__["EmailFormComponent"]], styles: [".ui.button.primary[_ngcontent-%COMP%] {\r\n  margin-bottom: 1rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtYWlsLWNyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6ImVtYWlsLWNyZWF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVpLmJ1dHRvbi5wcmltYXJ5IHtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "c1j3":
/*!************************************************************!*\
  !*** ./src/app/inbox/email-reply/email-reply.component.ts ***!
  \************************************************************/
/*! exports provided: EmailReplyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailReplyComponent", function() { return EmailReplyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _email_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../email.service */ "y1T3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/modal/modal.component */ "0zEo");
/* harmony import */ var _email_form_email_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../email-form/email-form.component */ "DEJV");





function EmailReplyComponent_app_modal_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-modal", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dismiss", function EmailReplyComponent_app_modal_2_Template_app_modal_dismiss_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.showModal = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Repy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-email-form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("emailSubmit", function EmailReplyComponent_app_modal_2_Template_app_email_form_emailSubmit_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onSubmit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("email", ctx_r0.email);
} }
class EmailReplyComponent {
    constructor(emailService) {
        this.emailService = emailService;
        this.showModal = false;
        this.email = {
            id: '',
            to: '',
            subject: '',
            html: '',
            text: '',
            from: '',
        };
    }
    ngOnChanges() {
        const text = this.email.text.replace(/\n/gi, '\n> ');
        this.email = Object.assign(Object.assign({}, this.email), { from: this.email.to, to: this.email.from, subject: this.email.subject.includes('Re:')
                ? this.email.subject
                : `Re:${this.email.subject}`, text: `\n\n\n----------- ${this.email.from} wrote:\n ${text}` });
    }
    onSubmit(email) {
        this.emailService.sendEmail(email).subscribe(() => {
            this.showModal = false;
        });
    }
}
EmailReplyComponent.ɵfac = function EmailReplyComponent_Factory(t) { return new (t || EmailReplyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_email_service__WEBPACK_IMPORTED_MODULE_1__["EmailService"])); };
EmailReplyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmailReplyComponent, selectors: [["app-email-reply"]], inputs: { email: "email" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 1, consts: [[1, "ui", "button", "primary", 3, "click"], [3, "dismiss", 4, "ngIf"], [3, "dismiss"], ["modalTitle", ""], [3, "email", "emailSubmit"]], template: function EmailReplyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailReplyComponent_Template_button_click_0_listener() { return ctx.showModal = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Repy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmailReplyComponent_app_modal_2_Template, 4, 1, "app-modal", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showModal);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"], _email_form_email_form_component__WEBPACK_IMPORTED_MODULE_4__["EmailFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbWFpbC1yZXBseS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "oD8o":
/*!************************************************************!*\
  !*** ./src/app/inbox/email-index/email-index.component.ts ***!
  \************************************************************/
/*! exports provided: EmailIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailIndexComponent", function() { return EmailIndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _email_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../email.service */ "y1T3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




function EmailIndexComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const email_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", email_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", email_r1.subject, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", email_r1.from, "");
} }
class EmailIndexComponent {
    constructor(emailService) {
        this.emailService = emailService;
        this.emails = [];
    }
    ngOnInit() {
        this.emailService.getEmails().subscribe((emails) => {
            this.emails = emails;
        });
    }
}
EmailIndexComponent.ɵfac = function EmailIndexComponent_Factory(t) { return new (t || EmailIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_email_service__WEBPACK_IMPORTED_MODULE_1__["EmailService"])); };
EmailIndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmailIndexComponent, selectors: [["app-email-index"]], decls: 2, vars: 1, consts: [[1, "ui", "celled", "list"], ["class", "item", 4, "ngFor", "ngForOf"], [1, "item"], ["routerLinkActive", "active", 3, "routerLink"], [1, "content"], [1, "header", "trim"], [1, "trim"]], template: function EmailIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmailIndexComponent_div_1_Template, 7, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.emails);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]], styles: [".item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: black;\r\n}\r\n\r\na.active[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n}\r\n\r\na.active[_ngcontent-%COMP%]::before {\r\n  content: \">\";\r\n  font-size: 20px;\r\n  margin-right: 10px;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n}\r\n\r\n.trim[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n  width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtYWlsLWluZGV4LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsV0FBVztBQUNiIiwiZmlsZSI6ImVtYWlsLWluZGV4LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbSBhIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbmEuYWN0aXZlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5hLmFjdGl2ZTo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIj5cIjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgd2lkdGg6IDkwJTtcclxufVxyXG5cclxuLnRyaW0ge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "tO32":
/*!********************************************************!*\
  !*** ./src/app/inbox/not-found/not-found.component.ts ***!
  \********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 4, vars: 0, consts: [[1, "ui", "placeholder", "segment"], [1, "ui", "icon", "header"], [1, "search", "icon"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Email not found! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "w6lD":
/*!**********************************************************!*\
  !*** ./src/app/inbox/email-show/email-show.component.ts ***!
  \**********************************************************/
/*! exports provided: EmailShowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailShowComponent", function() { return EmailShowComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _email_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../email.service */ "y1T3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _email_reply_email_reply_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../email-reply/email-reply.component */ "c1j3");






function EmailShowComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " From: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " To: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "app-email-reply", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.email.subject);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.email.from);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.email.to);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("email", ctx_r0.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r0.email.html, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
class EmailShowComponent {
    constructor(route, emailService) {
        this.route = route;
        this.emailService = emailService;
    }
    ngOnInit() {
        this.route.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(({ id }) => {
            return this.emailService.getEmail(id);
        }))
            .subscribe((email) => {
            this.email = email;
        });
    }
}
EmailShowComponent.ɵfac = function EmailShowComponent_Factory(t) { return new (t || EmailShowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_email_service__WEBPACK_IMPORTED_MODULE_3__["EmailService"])); };
EmailShowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EmailShowComponent, selectors: [["app-email-show"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "header"], [3, "email"], [1, "ui", "divider"], [3, "innerHTML"]], template: function EmailShowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, EmailShowComponent_ng_container_0_Template, 17, 5, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.email);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _email_reply_email_reply_component__WEBPACK_IMPORTED_MODULE_5__["EmailReplyComponent"]], styles: [".header[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-wrap: wrap;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtYWlsLXNob3cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsZUFBZTtBQUNqQiIsImZpbGUiOiJlbWFpbC1zaG93LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "y1T3":
/*!****************************************!*\
  !*** ./src/app/inbox/email.service.ts ***!
  \****************************************/
/*! exports provided: EmailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailService", function() { return EmailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


const rootUrl = 'https://api.angular-email.com';
class EmailService {
    constructor(http) {
        this.http = http;
    }
    getEmails() {
        return this.http.get(`${rootUrl}/emails`);
    }
    getEmail(id) {
        return this.http.get(`${rootUrl}/emails/${id}`);
    }
    sendEmail(email) {
        return this.http.post(`${rootUrl}/emails`, email);
    }
}
EmailService.ɵfac = function EmailService_Factory(t) { return new (t || EmailService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
EmailService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EmailService, factory: EmailService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zxsJ":
/*!***********************************************!*\
  !*** ./src/app/inbox/inbox-routing.module.ts ***!
  \***********************************************/
/*! exports provided: InboxRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxRoutingModule", function() { return InboxRoutingModule; });
/* harmony import */ var _email_resolver_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./email-resolver.service */ "M3S3");
/* harmony import */ var _email_show_email_show_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./email-show/email-show.component */ "w6lD");
/* harmony import */ var _placeholder_placeholder_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./placeholder/placeholder.component */ "BVxh");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "FK5R");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./not-found/not-found.component */ "tO32");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        children: [
            { path: 'not-found', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"] },
            {
                path: ':id',
                component: _email_show_email_show_component__WEBPACK_IMPORTED_MODULE_1__["EmailShowComponent"],
                resolve: {
                    email: _email_resolver_service__WEBPACK_IMPORTED_MODULE_0__["EmailResolverService"],
                },
            },
            { path: '', component: _placeholder_placeholder_component__WEBPACK_IMPORTED_MODULE_2__["PlaceholderComponent"] },
        ],
    },
];
class InboxRoutingModule {
}
InboxRoutingModule.ɵfac = function InboxRoutingModule_Factory(t) { return new (t || InboxRoutingModule)(); };
InboxRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: InboxRoutingModule });
InboxRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](InboxRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=inbox-inbox-module.js.map