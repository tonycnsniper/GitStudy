using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Calculators
{
    public interface ISubstract { int GetResult();}

    public class Substract:ISubstract
    {
        public int GetResult()
        {
            return 0;
        }
    }
}
