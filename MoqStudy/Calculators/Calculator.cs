using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Calculators
{
    public class Calculator
    {
        
        public static void Main()
        {

        }
        private IAdd _add;

        public Calculator(IAdd add)
        {
            _add = add;
        }

        public int Sum()
        {

            return _add.GetResult();
        }
    }
}
