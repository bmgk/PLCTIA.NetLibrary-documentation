---
id: FB
title: FB
---

Function blok class is created by inherit "NetworkBlock" class with added protected sections.

- [In,Out,InOut](section/Interface)
- [Temp](section/Temp)
- [Static](section/Static)
- [Const](section/Const)

``` cs
[Scope(Helper.BlockNameScope.FB.Safety)]
[Destination(Helper.Arg, Helper.Directory.Safety)]
[Block(Name = "Last_SK{0}", TitleText = "Lastspannung {0} F-PROGRAMM")]
public class Last_SK : CodeFb<F_LadCode,F_Lad, Last_SK.In, Last_SK.InOut, Last_SK.Out, Last_SK.Stat, Last_SK.Temp,
    Last_SK.Const>
{
    public Last_SK(IPlcClient plcClient, Zone zone, IEnumerable<MobilePanel> panels) : base(plcClient,
        zone.FullName, zone.Parent.Name)
    {
        /..
        ../
    }

    #region Networks
    /..
    ../
    #endregion

    #region Interface

    public class In : InDynamicSection<FbElement>
    {
        public In(object parent) : base(parent)
        {
        }
        public In(object parent, params string[] args) : base(parent, args)
        {
        }
        [FbElement(CommentText = "de-DE:Quittierung Rückführkreis")]
        public SimpleCodeSymbol<Bool> QUITRUEC { get; private set; }

        [FbElement(Name = "IN_K16G", CommentText = "de-DE:Freigabe Not-Halt Gesamt")]
        public SimpleCodeSymbol<Bool> IN_xK16G { get; private set; }

        [FbElement(Name = "IN_{1}K61", CommentText = "de-DE:Antriebe Ein")]
        public SimpleCodeSymbol<Bool> IN_xK61 { get; private set; }

        [FbElement(Name = "IN_{0}K36", CommentText = "de-DE:Freigabe Schutzkreis {0}")]
        public SimpleCodeSymbol<Bool> IN_xK36 { get; private set; }

        [FbElement(Name = "IN_{0}Aktiv", CommentText = "de-DE:Freigabe Schutzkreis {0}")]
        public BoxSimpleDictionary<Robot, Bool> IN_xAktiv { get; private set; }
    }

    /..
    ../
    
    public class Temp : TempDynamicSection
    {
        public Temp(object parent) : base(parent)
        {
        }
        public Temp(object parent, params string[] args) : base(parent, args)
        {
        }
        [LocalVariable(CommentText = "de-De:Rückmeldung: Reset/Quittierung ist erforderlich und möglich")]
        public SimpleCodeSymbol<Bool> ACK_REQ { get; private set; }
        /..
        ../
        [LocalVariable(Name = "FM_{0}KWE2", CommentText = "de-De:Mobil-Panel {0} aktiv")]
        public BoxSimpleList<Bool> FM_xKWE2 { get; private set; }

        [LocalVariable(Name = "FM_{0}K100", CommentText = "de-De:Mobil-Panel {0} Zustimmtaster aktiv")]
        public BoxSimpleDictionary<MobilePanel, Bool> FM_MxK100 { get; private set; }

        [LocalVariable(CommentText = "de-DE:Diagnose Freigabe steht an")]
        public BoxSimple<Bool> DIAG_FRG { get; private set; }
    }

    public class Stat : StaticDynamicSection
    {
        public Stat(object parent) : base(parent)
        {
        }
        public Stat(object parent, params string[] args) : base(parent, args)
        {
        }
        [FbElement(Name = "FM_VKE=0", CommentText = "staendig VKE=0")]
        public SimpleCodeSymbol<Bool> FM_VKE_0 { get; private set; }

        [FbElement(Name = "FM_VKE=1", CommentText = "staendig VKE=1", StartValue = "true")]
        public SimpleCodeSymbol<Bool> FM_VKE_1 { get; private set; }

        /..
        ../
        [FbElement(Name = "FRG_{0}K100")]
        public IdbStaticFbBoxList<F_FRG.SymbolIdb> FRG_xK100 { get; private set; }
    }
    
    #endregion
}
```