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
        private ISubstract _sub;

        public IAdd SetAdd
        {
            get 
            {
                return _add;
            }

            set 
            {
                _add = value;
            }
        }

        public ISubstract SetSub 
        {
            get
            {
                return _sub;
            }
            set
            {
                _sub = value;
            }
        
        }

        public int Sum()
        {

            return _add.GetResult();
        }

        public int Substract()
        {
            return _sub.GetResult();
        }
    }
}
