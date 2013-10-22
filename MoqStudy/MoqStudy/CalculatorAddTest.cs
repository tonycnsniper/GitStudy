using System;
using System.Text;
using System.Collections.Generic;
using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using AutoMoq;
using Calculators;
using NUnit.Framework;

namespace MoqStudy
{
    [TestClass]
    public class CalculatorAddTest
    {
        Mock<IAdd> addMock;
        AutoMoq.AutoMoqer mocker;

        [SetUp]
        public void SetUp()
        {

        }

        [TestMethod]
        public void Sum_SimpleAdd_ReturnInt()
        {
            mocker = new AutoMoqer();
            addMock = mocker.GetMock<IAdd>();
            addMock.Setup(x => x.GetResult()).Returns(5);

            Calculator c = new Calculator(addMock.Object);
            int sum = c.Sum();
            
            
            addMock.Verify(x => x.GetResult(),Times.Once());
        }

        [TestMethod]
        public void Abstract_SimpleAbstract_Return()
        {

        }

    }
}
