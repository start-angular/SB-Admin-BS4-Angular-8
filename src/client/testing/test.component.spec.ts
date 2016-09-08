import { TestComponentBuilder } from '@angular/compiler/testing';
import { disableDeprecatedForms, provideForms } from '@angular/forms/index';
import { Component } from '@angular/core';
import {
    describe,
    expect,
    inject,
    it
} from '@angular/core/testing';
import { getDOM } from '@angular/platform-browser/src/dom/dom_adapter';

import { TestingComponent } from './test.component';

export function main() {
    describe('Testing component', () => {
    // Disable old forms
    let providerArr: any[];

    beforeEach(() => { providerArr = [disableDeprecatedForms(), provideForms()]; });

    it('should work',
        inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            tcb.overrideProviders(TestComponent, providerArr)
            .createAsync(TestComponent)
            .then((rootTC: any) => {
                let aboutDOMEl = rootTC.debugElement.children[0].nativeElement;

                expect(getDOM().querySelectorAll(aboutDOMEl, 'h2')[0].textContent).toEqual('Testing');
            });
        }));
});
}

@Component({
    selector: 'test-cmp',
    directives: [TestingComponent],
    template: '<testing-cmp></testing-cmp>'
})

class TestComponent {}
