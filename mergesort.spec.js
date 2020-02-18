describe('Split Array function', function() {
  it('returns an empty array when given an empty array', function() {
    expect( split([]) ).toEqual( [] );
  });
  it('splits an even-lengthed array in half', function() {
    expect( split([6,1,2,3]) ).toEqual( [ [6,1], [2,3] ] );
  })
  it('splits an odd-lengthed array in half', function(){
    expect( split([6,1,2,3,1]) ).toEqual( [ [6,1], [2,3,1] ] );
  })
});

describe('Merge array function', function() {
  it('returns one sorted array from two even-length sorted arrays', function(){
    expect( merge( [1,6], [2,3] )).toEqual( [1, 2, 3, 6 ] );
  });
  it('returns an empty array if given two empty arrays', function(){
    expect( merge( [], [] )).toEqual([]);
  });
  it('returns one sorted array from one odd and one even array', function(){
    expect( merge( [1, 4, 5], [3, 5, 19, 21] )).toEqual( [1, 3, 4, 5, 5, 19, 21] );
  })
});
