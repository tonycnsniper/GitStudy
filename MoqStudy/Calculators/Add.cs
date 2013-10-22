using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Calculators
{
    public interface IAdd { int GetResult();}

    public class Add : IAdd
    {
        int a, b;
        public Add(int a , int b)
        {
            this.a = a;
            this.b = b;
        }

        public int GetResult()
        {
            return DoAdd();
        }

        public int DoAdd()
        {
            return a + b;
        }
    }
}
