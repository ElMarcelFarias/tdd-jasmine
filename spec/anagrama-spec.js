//tdd
var isAnagram = require ('../anagrama');

describe('Teste Anagram', function(){
    it('quando for verdadeiro "abc" e "cba"',function(){
        expect(isAnagram('abc','cba')).toEqual(true);
    })
    it('quando for verdadeiro "amor" e "roma"',function(){
        expect(isAnagram('amor','roma')).toEqual(true);
    })
    it('se é verdadeiro que existem duas strings vazias',function(){
        expect(isAnagram('','')).toEqual(true)
    })
    it('é verdade quando "132" é igual a "312"',function(){
        expect(isAnagram('132','312')).toEqual(true);
    })
    it('é verdade quando 0.12 e "102"',function(){
        expect(isAnagram(0.12,'102')).toEqual(true);
    })
    it('é falso "012" não é igual a "102"',function(){
        expect(isAnagram(012,102)).toEqual(false)
    })
})