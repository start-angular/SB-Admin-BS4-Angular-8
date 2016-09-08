import {NameList} from './name_list';

export function main() {
    describe('NameList Service', () => {
        let nameList:any;

        beforeEach(() => {
            nameList = new NameList;
        });

        it('should return the list of movie names', () => {
            let names = nameList.get();
            expect(names).toEqual(jasmine.any(Array));
        });
    });
}
