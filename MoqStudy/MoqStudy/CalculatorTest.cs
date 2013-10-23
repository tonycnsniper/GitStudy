﻿using System;
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
    public class CalculatorTest
    {
        Mock<IAdd> addMock;
        Mock<ISubstract> subStract;
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
            addMock.Setup(x => x.GetResult()).Returns(2);

            Calculator c = new Calculator();
            c.SetAdd = addMock.Object;
            int sum = c.Sum();
            
            
            addMock.Verify(x => x.GetResult(),Times.Once());
        }

        [TestMethod]
        public void Abstract_SimpleAbstract_Return()
        {
            mocker = new AutoMoqer();
            subStract = mocker.GetMock<ISubstract>();

            subStract.Setup(x => x.GetResult()).Returns(4);
            Calculator s = new Calculator();
            s.SetSub = subStract.Object;
            int sub = s.Substract();

            subStract.Verify(l => l.GetResult(), Times.Exactly(2));
        }

    }
}