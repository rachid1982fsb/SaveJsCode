def kangaroo(x1, v1, x2, v2)
    if (v1 == v2 && x1 != x2)
        return "NO"
    elsif (v1 == v2 && x1 == x2) 
        return "YES"
    elsif (x1-x2)/(v2-v1) >=0 && (x1-x2)%(v2-v1) == 0  
        return "YES"
    else 
        return "NO"
    end
end

Y is the meet point
X the number of jumps
if the are going to meet Y= x1 + X*v1 & Y = x2 + X*v2
==> x1 + X*v1 = x2 + X*v2
==> x1 - x2 = X*v2 - X*v1
==> x1 - x2 = X(v2 - v1)
==> X = (x1 - x2)/v2 - v1)
in order of the equation to be correct X has to be positive and integer