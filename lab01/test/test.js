var expect = require('chai').expect;
describe('基本assert練習', function() {
    it('相等或不相等',function(){
        expect(4 + 5).to.be.equal(9);
    })     
    it('相等或不相等',function(){
        expect(4 + 5).to.be.not.equal(10);
    })  
    it('相等或不相等',function(){
        var foo = { bar: 'baz' };
        expect(foo).to.be.deep.equal({ bar: 'baz' });
    })  
    it('boolean',function(){
        expect(false).to.not.be.ok;
    })
    it('boolean',function(){
        expect('everthing').to.be.ok;
    })
    it('typeof',function(){
        expect('test').to.be.a('string');
    }) 
    it('typeof',function(){
        expect({ foo: 'bar' }).to.be.an('object');
    }) 
    it('typeof',function(){
        var Foo = function (){}
        var foo = new Foo()
        expect(foo).to.be.an.instanceof(Foo);
    }) 
    it('include',function(){
        expect([1,2,3]).to.include(2);
    }) 
    it('include',function(){
        expect('foobar').to.contain('foo');
    }) 

    it('include',function(){
        expect({ foo: 'bar', hello: 'universe' }).to.include.keys('foo');
    })
    it('empty',function(){
        expect([]).to.be.empty;
    })
    it('empty',function(){
        expect('').to.be.empty;
    })
    it('empty',function(){
        expect({}).to.be.empty;
    })
    it('match',function(){
        expect('foobar').to.match(/^foo/);
    })
});