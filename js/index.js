var ids = {"CVE-2019-15552":["RUSTSEC-2019-0010"],"RUSTSEC-2020-0061":["RUSTSEC-2020-0061"],"CVE-2020-35887":["RUSTSEC-2020-0034"],"CVE-2020-35911":["RUSTSEC-2020-0070"],"RUSTSEC-2021-0011":["RUSTSEC-2021-0011"],"RUSTSEC-2020-0139":["RUSTSEC-2020-0139"],"GHSA-5xg3-j2j6-rcx4":["RUSTSEC-2021-0105"],"CVE-2020-35910":["RUSTSEC-2020-0070"],"RUSTSEC-2021-0103":["RUSTSEC-2021-0103"],"CVE-2020-25791":["RUSTSEC-2020-0041"],"CVE-2022-35922":["RUSTSEC-2022-0035"],"CVE-2021-39216":["RUSTSEC-2021-0110"],"RUSTSEC-2021-0074":["RUSTSEC-2021-0074"],"CVE-2020-35711":["RUSTSEC-2020-0091"],"RUSTSEC-2021-0125":["RUSTSEC-2021-0125"],"RUSTSEC-2021-0018":["RUSTSEC-2021-0018"],"CVE-2017-18587":["RUSTSEC-2017-0002"],"CVE-2021-30456":["RUSTSEC-2021-0052"],"CVE-2020-35906":["RUSTSEC-2020-0060"],"RUSTSEC-2022-0005":["RUSTSEC-2022-0005"],"CVE-2019-25006":["RUSTSEC-2019-0030"],"CVE-2019-16139":["RUSTSEC-2019-0015"],"RUSTSEC-2022-0032":["RUSTSEC-2022-0032"],"RUSTSEC-2020-0081":["RUSTSEC-2020-0081"],"RUSTSEC-2019-0011":["RUSTSEC-2019-0011"],"RUSTSEC-2020-0109":["RUSTSEC-2020-0109"],"CVE-2018-20991":["RUSTSEC-2018-0003"],"CVE-2020-36218":["RUSTSEC-2020-0112"],"RUSTSEC-2021-0087":["RUSTSEC-2021-0087"],"CVE-2020-36454":["RUSTSEC-2020-0134"],"CVE-2020-35879":["RUSTSEC-2020-0023"],"CVE-2021-28035":["RUSTSEC-2021-0033"],"CVE-2020-25016":["RUSTSEC-2020-0029"],"CVE-2021-31155":["RUSTSEC-2021-0101"],"CVE-2020-35918":["RUSTSEC-2020-0075"],"GHSA-ghpq-vjxw-ch5w":["RUSTSEC-2018-0021"],"RUSTSEC-2018-0017":["RUSTSEC-2018-0017"],"RUSTSEC-2021-0069":["RUSTSEC-2021-0069"],"RUSTSEC-2022-0048":["RUSTSEC-2022-0048"],"RUSTSEC-2021-0012":["RUSTSEC-2021-0012"],"CVE-2020-35857":["RUSTSEC-2020-0001"],"CVE-2021-28029":["RUSTSEC-2021-0028"],"CVE-2019-1010299":["CVE-2019-1010299"],"CVE-2021-38191":["RUSTSEC-2021-0072"],"RUSTSEC-2020-0018":["RUSTSEC-2020-0018"],"RUSTSEC-2021-0043":["RUSTSEC-2021-0043"],"RUSTSEC-2020-0078":["RUSTSEC-2020-0078"],"CVE-2021-25907":["RUSTSEC-2021-0010"],"CVE-2021-28308":["RUSTSEC-2021-0038"],"RUSTSEC-2021-0029":["RUSTSEC-2021-0029"],"RUSTSEC-2020-0105":["RUSTSEC-2020-0105"],"CVE-2020-35878":["RUSTSEC-2020-0022"],"RUSTSEC-2020-0007":["RUSTSEC-2020-0007"],"RUSTSEC-2017-0001":["RUSTSEC-2017-0001"],"CVE-2020-25575":["RUSTSEC-2020-0036","RUSTSEC-2019-0036","RUSTSEC-2019-0030"],"CVE-2020-36448":["RUSTSEC-2020-0128"],"RUSTSEC-2020-0089":["RUSTSEC-2020-0089"],"CVE-2019-15551":["RUSTSEC-2019-0009"],"CVE-2021-38512":["RUSTSEC-2021-0081"],"RUSTSEC-2021-0038":["RUSTSEC-2021-0038"],"CVE-2021-27376":["RUSTSEC-2021-0021"],"CVE-2020-36220":["RUSTSEC-2020-0114"],"RUSTSEC-2018-0004":["RUSTSEC-2018-0004"],"CVE-2019-15546":["RUSTSEC-2019-0005"],"CVE-2016-10931":["RUSTSEC-2016-0001"],"RUSTSEC-2020-0152":["RUSTSEC-2020-0152"],"RUSTSEC-2021-0003":["RUSTSEC-2021-0003"],"CVE-2020-35861":["RUSTSEC-2020-0006"],"RUSTSEC-2022-0043":["RUSTSEC-2022-0043"],"RUSTSEC-2021-0110":["RUSTSEC-2021-0110"],"RUSTSEC-2021-0017":["RUSTSEC-2021-0017"],"CVE-2021-29936":["RUSTSEC-2021-0045"],"RUSTSEC-2020-0112":["RUSTSEC-2020-0112"],"RUSTSEC-2020-0124":["RUSTSEC-2020-0124"],"CVE-2020-36442":["RUSTSEC-2020-0122"],"RUSTSEC-2020-0033":["RUSTSEC-2020-0033"],"CVE-2020-1967":["RUSTSEC-2020-0015"],"RUSTSEC-2021-0099":["RUSTSEC-2021-0099"],"CVE-2020-25574":["RUSTSEC-2019-0033"],"RUSTSEC-2019-0005":["RUSTSEC-2019-0005"],"RUSTSEC-2021-0116":["RUSTSEC-2021-0116"],"RUSTSEC-2018-0015":["RUSTSEC-2018-0015"],"RUSTSEC-2018-0021":["RUSTSEC-2018-0021"],"CVE-2020-36437":["RUSTSEC-2020-0117"],"CVE-2020-35919":["RUSTSEC-2020-0078"],"RUSTSEC-2021-0098":["RUSTSEC-2021-0098"],"CVE-2021-28034":["RUSTSEC-2021-0033"],"RUSTSEC-2021-0121":["RUSTSEC-2021-0121"],"RUSTSEC-2021-0010":["RUSTSEC-2021-0010"],"CVE-2022-23639":["RUSTSEC-2022-0041"],"CVE-2022-31173":["RUSTSEC-2022-0038"],"CVE-2021-38190":["RUSTSEC-2021-0070"],"RUSTSEC-2020-0118":["RUSTSEC-2020-0118"],"RUSTSEC-2020-0073":["RUSTSEC-2020-0073"],"RUSTSEC-2020-0145":["RUSTSEC-2020-0145"],"RUSTSEC-2020-0113":["RUSTSEC-2020-0113"],"CVE-2020-35896":["RUSTSEC-2020-0043"],"RUSTSEC-2020-0048":["RUSTSEC-2020-0048"],"CVE-2021-26951":["RUSTSEC-2021-0015"],"CVE-2020-26281":["RUSTSEC-2020-0093"],"RUSTSEC-2019-0009":["RUSTSEC-2019-0009"],"RUSTSEC-2020-0155":["RUSTSEC-2020-0155"],"CVE-2021-25904":["RUSTSEC-2021-0007"],"CVE-2020-36211":["RUSTSEC-2020-0104"],"CVE-2020-35921":["RUSTSEC-2020-0080"],"CVE-2020-36470":["RUSTSEC-2020-0150"],"RUSTSEC-2019-0014":["RUSTSEC-2019-0014"],"CVE-2018-20999":["RUSTSEC-2018-0012"],"RUSTSEC-2017-0007":["RUSTSEC-2017-0007"],"CVE-2020-25794":["RUSTSEC-2020-0041"],"CVE-2019-15548":["RUSTSEC-2019-0006"],"CVE-2020-36216":["RUSTSEC-2020-0108"],"CVE-2020-36457":["RUSTSEC-2020-0137"],"CVE-2021-26957":["RUSTSEC-2021-0019"],"RUSTSEC-2021-0007":["RUSTSEC-2021-0007"],"CVE-2021-28877":["CVE-2021-28877"],"GHSA-6hfq-h8hq-87mf":["RUSTSEC-2021-0020"],"CVE-2020-35925":["RUSTSEC-2020-0088"],"RUSTSEC-2020-0111":["RUSTSEC-2020-0111"],"CVE-2020-15254":["RUSTSEC-2020-0052"],"RUSTSEC-2020-0056":["RUSTSEC-2020-0056"],"RUSTSEC-2019-0012":["RUSTSEC-2019-0012"],"RUSTSEC-2018-0006":["RUSTSEC-2018-0006"],"CVE-2020-36217":["RUSTSEC-2020-0111"],"RUSTSEC-2021-0129":["RUSTSEC-2021-0129"],"CVE-2020-36455":["RUSTSEC-2020-0135"],"RUSTSEC-2021-0131":["RUSTSEC-2021-0131"],"RUSTSEC-2022-0027":["RUSTSEC-2022-0027"],"RUSTSEC-2020-0051":["RUSTSEC-2020-0051"],"CVE-2021-26954":["RUSTSEC-2021-0018"],"CVE-2022-21658":["CVE-2022-21658"],"RUSTSEC-2020-0024":["RUSTSEC-2020-0024"],"RUSTSEC-2020-0128":["RUSTSEC-2020-0128"],"CVE-2020-35905":["RUSTSEC-2020-0059"],"RUSTSEC-2019-0028":["RUSTSEC-2019-0028"],"CVE-2021-31153":["RUSTSEC-2021-0104"],"RUSTSEC-2022-0037":["RUSTSEC-2022-0037"],"CVE-2020-35885":["RUSTSEC-2020-0032"],"CVE-2020-35858":["RUSTSEC-2020-0002"],"RUSTSEC-2021-0092":["RUSTSEC-2021-0092"],"RUSTSEC-2019-0008":["RUSTSEC-2019-0008"],"RUSTSEC-2021-0080":["RUSTSEC-2021-0080"],"RUSTSEC-2021-0111":["RUSTSEC-2021-0111"],"CVE-2020-35891":["RUSTSEC-2020-0038"],"RUSTSEC-2020-0097":["RUSTSEC-2020-0097"],"RUSTSEC-2021-0064":["RUSTSEC-2021-0064"],"RUSTSEC-2020-0082":["RUSTSEC-2020-0082"],"CVE-2020-35865":["RUSTSEC-2020-0012"],"RUSTSEC-2020-0013":["RUSTSEC-2020-0013"],"RUSTSEC-2020-0004":["RUSTSEC-2020-0004"],"RUSTSEC-2019-0029":["RUSTSEC-2019-0029"],"RUSTSEC-2019-0026":["RUSTSEC-2019-0026"],"GHSA-xq3c-8gqm-v648":["RUSTSEC-2022-0038","RUSTSEC-2022-0037"],"RUSTSEC-2021-0032":["RUSTSEC-2021-0032"],"RUSTSEC-2020-0159":["RUSTSEC-2020-0159"],"GHSA-qc84-gqf4-9926":["RUSTSEC-2022-0041"],"RUSTSEC-2020-0095":["RUSTSEC-2020-0095"],"RUSTSEC-2020-0116":["RUSTSEC-2020-0116"],"CVE-2019-25007":["RUSTSEC-2019-0030"],"CVE-2018-20995":["RUSTSEC-2018-0008"],"RUSTSEC-2021-0139":["RUSTSEC-2021-0139"],"RUSTSEC-2021-0096":["RUSTSEC-2021-0096"],"CVE-2020-36461":["RUSTSEC-2020-0141"],"RUSTSEC-2020-0022":["RUSTSEC-2020-0022"],"RUSTSEC-2020-0119":["RUSTSEC-2020-0119"],"CVE-2020-35890":["RUSTSEC-2020-0038"],"GHSA-v5m7-53cv-f3hx":["RUSTSEC-2020-0052"],"RUSTSEC-2020-0132":["RUSTSEC-2020-0132"],"CVE-2021-30457":["RUSTSEC-2021-0052"],"CVE-2020-36443":["RUSTSEC-2020-0123"],"RUSTSEC-2021-0015":["RUSTSEC-2021-0015"],"GHSA-vc5p-j8vw-mc6x":["RUSTSEC-2021-0101"],"RUSTSEC-2022-0053":["RUSTSEC-2022-0053"],"RUSTSEC-2022-0024":["RUSTSEC-2022-0024"],"RUSTSEC-2020-0127":["RUSTSEC-2020-0127"],"CVE-2020-36453":["RUSTSEC-2020-0133"],"CVE-2020-35903":["RUSTSEC-2020-0050"],"RUSTSEC-2021-0005":["RUSTSEC-2021-0005"],"CVE-2020-35897":["RUSTSEC-2020-0044"],"RUSTSEC-2020-0040":["RUSTSEC-2020-0040"],"CVE-2020-35917":["RUSTSEC-2020-0074"],"RUSTSEC-2020-0108":["RUSTSEC-2020-0108"],"CVE-2020-35902":["RUSTSEC-2020-0049"],"CVE-2020-35908":["RUSTSEC-2020-0062"],"CVE-2019-25005":["RUSTSEC-2019-0029"],"RUSTSEC-2021-0137":["RUSTSEC-2021-0137"],"CVE-2017-18588":["RUSTSEC-2017-0003"],"RUSTSEC-2016-0005":["RUSTSEC-2016-0005"],"RUSTSEC-2020-0042":["RUSTSEC-2020-0042"],"RUSTSEC-2019-0021":["RUSTSEC-2019-0021"],"RUSTSEC-2022-0012":["RUSTSEC-2022-0012"],"CVE-2020-25796":["RUSTSEC-2020-0041"],"CVE-2019-25002":["RUSTSEC-2019-0026"],"RUSTSEC-2021-0047":["RUSTSEC-2021-0047"],"RUSTSEC-2021-0008":["RUSTSEC-2021-0008"],"RUSTSEC-2020-0014":["RUSTSEC-2020-0014"],"CVE-2022-31100":["RUSTSEC-2022-0031"],"RUSTSEC-2020-0137":["RUSTSEC-2020-0137"],"RUSTSEC-2020-0065":["RUSTSEC-2020-0065"],"RUSTSEC-2020-0074":["RUSTSEC-2020-0074"],"CVE-2020-35892":["RUSTSEC-2020-0039"],"RUSTSEC-2020-0020":["RUSTSEC-2020-0020"],"CVE-2021-26308":["RUSTSEC-2021-0014"],"CVE-2021-29922":["CVE-2021-29922"],"RUSTSEC-2020-0002":["RUSTSEC-2020-0002"],"CVE-2018-20997":["RUSTSEC-2018-0010"],"CVE-2020-36445":["RUSTSEC-2020-0125"],"RUSTSEC-2020-0096":["RUSTSEC-2020-0096"],"RUSTSEC-2019-0038":["RUSTSEC-2019-0038"],"RUSTSEC-2021-0057":["RUSTSEC-2021-0057"],"RUSTSEC-2020-0143":["RUSTSEC-2020-0143"],"GHSA-8v9w-p43c-r885":["RUSTSEC-2022-0031"],"CVE-2020-36213":["RUSTSEC-2020-0105"],"CVE-2020-36205":["RUSTSEC-2020-0097"],"CVE-2020-36458":["RUSTSEC-2020-0138"],"CVE-2018-20992":["RUSTSEC-2018-0004"],"CVE-2017-1000168":["RUSTSEC-2017-0001"],"CVE-2020-35862":["RUSTSEC-2020-0007"],"GHSA-mmc9-pwm7-qj5w":["RUSTSEC-2019-0035"],"RUSTSEC-2020-0017":["RUSTSEC-2020-0017"],"RUSTSEC-2021-0089":["RUSTSEC-2021-0089"],"CVE-2020-35867":["RUSTSEC-2020-0014"],"CVE-2021-29941":["RUSTSEC-2021-0050"],"RUSTSEC-2022-0008":["RUSTSEC-2022-0008"],"CVE-2020-36452":["RUSTSEC-2020-0132"],"RUSTSEC-2020-0104":["RUSTSEC-2020-0104"],"RUSTSEC-2020-0125":["RUSTSEC-2020-0125"],"RUSTSEC-2020-0057":["RUSTSEC-2020-0057"],"CVE-2019-15543":["RUSTSEC-2019-0002"],"CVE-2020-36210":["RUSTSEC-2020-0103"],"RUSTSEC-2021-0004":["RUSTSEC-2021-0004"],"CVE-2020-36207":["RUSTSEC-2020-0099"],"RUSTSEC-2020-0134":["RUSTSEC-2020-0134"],"CVE-2020-26235":["RUSTSEC-2020-0071","RUSTSEC-2020-0159"],"CVE-2021-43620":["RUSTSEC-2021-0123"],"CVE-2021-3013":["RUSTSEC-2021-0071"],"RUSTSEC-2020-0011":["RUSTSEC-2020-0011"],"RUSTSEC-2020-0016":["RUSTSEC-2020-0016"],"CVE-2019-16760":["CVE-2019-16760"],"RUSTSEC-2020-0163":["RUSTSEC-2020-0163"],"GHSA-p24j-h477-76q3":["RUSTSEC-2021-0106"],"CVE-2021-28027":["RUSTSEC-2021-0027"],"CVE-2021-25903":["RUSTSEC-2021-0006"],"CVE-2020-36459":["RUSTSEC-2020-0139"],"RUSTSEC-2020-0107":["RUSTSEC-2020-0107"],"CVE-2020-35869":["RUSTSEC-2020-0014"],"CVE-2020-36456":["RUSTSEC-2020-0136"],"RUSTSEC-2020-0010":["RUSTSEC-2020-0010"],"RUSTSEC-2019-0034":["RUSTSEC-2019-0034"],"RUSTSEC-2021-0054":["RUSTSEC-2021-0054"],"CVE-2020-36472":["RUSTSEC-2020-0152"],"RUSTSEC-2020-0050":["RUSTSEC-2020-0050"],"CVE-2020-8927":["RUSTSEC-2021-0131","RUSTSEC-2021-0132"],"CVE-2020-35894":["RUSTSEC-2020-0040"],"CVE-2022-31099":["RUSTSEC-2022-0030"],"RUSTSEC-2021-0070":["RUSTSEC-2021-0070"],"CVE-2021-25902":["RUSTSEC-2021-0005"],"RUSTSEC-2021-0006":["RUSTSEC-2021-0006"],"RUSTSEC-2020-0006":["RUSTSEC-2020-0006"],"RUSTSEC-2019-0010":["RUSTSEC-2019-0010"],"RUSTSEC-2019-0006":["RUSTSEC-2019-0006"],"RUSTSEC-2019-0003":["RUSTSEC-2019-0003"],"CVE-2021-28879":["CVE-2021-28879"],"CVE-2020-35870":["RUSTSEC-2020-0014"],"CVE-2016-10932":["RUSTSEC-2016-0002"],"CVE-2020-36206":["RUSTSEC-2020-0098"],"CVE-2019-25008":["RUSTSEC-2019-0033"],"RUSTSEC-2022-0003":["RUSTSEC-2022-0003"],"RUSTSEC-2021-0072":["RUSTSEC-2021-0072"],"CVE-2020-35872":["RUSTSEC-2020-0014"],"GHSA-4vr9-8cjf-vf9c":["RUSTSEC-2020-0093"],"CVE-2020-35913":["RUSTSEC-2020-0070"],"RUSTSEC-2019-0017":["RUSTSEC-2019-0017"],"RUSTSEC-2022-0051":["RUSTSEC-2022-0051"],"RUSTSEC-2022-0047":["RUSTSEC-2022-0047"],"RUSTSEC-2021-0021":["RUSTSEC-2021-0021"],"RUSTSEC-2020-0063":["RUSTSEC-2020-0063"],"RUSTSEC-2019-0037":["RUSTSEC-2019-0037"],"RUSTSEC-2020-0071":["RUSTSEC-2020-0071","RUSTSEC-2020-0159"],"CVE-2020-35909":["RUSTSEC-2020-0068"],"RUSTSEC-2020-0066":["RUSTSEC-2020-0066"],"RUSTSEC-2020-0012":["RUSTSEC-2020-0012"],"RUSTSEC-2022-0014":["RUSTSEC-2022-0014"],"CVE-2019-15547":["RUSTSEC-2019-0006"],"RUSTSEC-2019-0022":["RUSTSEC-2019-0022"],"RUSTSEC-2020-0103":["RUSTSEC-2020-0103"],"CVE-2020-36439":["RUSTSEC-2020-0119"],"CVE-2018-1000622":["CVE-2018-1000622"],"RUSTSEC-2022-0002":["RUSTSEC-2022-0002"],"CVE-2020-36471":["RUSTSEC-2020-0151"],"RUSTSEC-2020-0140":["RUSTSEC-2020-0140"],"CVE-2021-38194":["RUSTSEC-2021-0075"],"RUSTSEC-2021-0044":["RUSTSEC-2021-0044"],"RUSTSEC-2020-0136":["RUSTSEC-2020-0136"],"CVE-2021-29934":["RUSTSEC-2021-0043"],"CVE-2020-36469":["RUSTSEC-2020-0149"],"RUSTSEC-2022-0010":["RUSTSEC-2022-0010"],"CVE-2020-36434":["RUSTSEC-2020-0100"],"RUSTSEC-2022-0046":["RUSTSEC-2022-0046"],"CVE-2020-35876":["RUSTSEC-2020-0021"],"CVE-2021-29937":["RUSTSEC-2021-0046"],"CVE-2020-35866":["RUSTSEC-2020-0014"],"RUSTSEC-2021-0126":["RUSTSEC-2021-0126"],"RUSTSEC-2020-0117":["RUSTSEC-2020-0117"],"RUSTSEC-2020-0037":["RUSTSEC-2020-0037"],"GHSA-45p7-c959-rgcm":["RUSTSEC-2021-0109"],"CVE-2020-36467":["RUSTSEC-2020-0148"],"CVE-2020-35889":["RUSTSEC-2020-0037"],"RUSTSEC-2021-0082":["RUSTSEC-2021-0082"],"RUSTSEC-2022-0020":["RUSTSEC-2022-0020"],"RUSTSEC-2021-0067":["RUSTSEC-2021-0067"],"RUSTSEC-2021-0065":["RUSTSEC-2021-0065"],"CVE-2020-35874":["RUSTSEC-2020-0017"],"CVE-2020-35873":["RUSTSEC-2020-0014"],"RUSTSEC-2021-0081":["RUSTSEC-2021-0081"],"CVE-2021-29935":["RUSTSEC-2021-0044"],"CVE-2020-35863":["RUSTSEC-2020-0008"],"RUSTSEC-2020-0158":["RUSTSEC-2020-0158"],"CVE-2021-32629":["RUSTSEC-2021-0067"],"RUSTSEC-2021-0023":["RUSTSEC-2021-0023"],"RUSTSEC-2021-0001":["RUSTSEC-2021-0001"],"CVE-2020-35860":["RUSTSEC-2020-0005"],"RUSTSEC-2020-0029":["RUSTSEC-2020-0029"],"RUSTSEC-2020-0008":["RUSTSEC-2020-0008"],"RUSTSEC-2020-0162":["RUSTSEC-2020-0162"],"RUSTSEC-2019-0007":["RUSTSEC-2019-0007"],"CVE-2018-20993":["RUSTSEC-2018-0006"],"RUSTSEC-2020-0044":["RUSTSEC-2020-0044"],"CVE-2021-28033":["RUSTSEC-2021-0032"],"CVE-2021-28307":["RUSTSEC-2021-0038"],"RUSTSEC-2021-0013":["RUSTSEC-2021-0013"],"RUSTSEC-2021-0079":["RUSTSEC-2021-0079"],"RUSTSEC-2018-0005":["RUSTSEC-2018-0005"],"RUSTSEC-2021-0020":["RUSTSEC-2021-0020"],"RUSTSEC-2019-0035":["RUSTSEC-2019-0035"],"RUSTSEC-2022-0042":["RUSTSEC-2022-0042"],"GHSA-6gvc-4jvj-pwq4":["RUSTSEC-2018-0020"],"CVE-2020-36208":["RUSTSEC-2020-0101"],"RUSTSEC-2018-0009":["RUSTSEC-2018-0009"],"CVE-2020-35922":["RUSTSEC-2020-0081"],"RUSTSEC-2020-0135":["RUSTSEC-2020-0135"],"GHSA-phjm-8x66-qw4r":["CVE-2019-16760"],"CVE-2020-35900":["RUSTSEC-2020-0047"],"CVE-2020-36435":["RUSTSEC-2020-0115"],"RUSTSEC-2020-0045":["RUSTSEC-2020-0045"],"RUSTSEC-2022-0038":["RUSTSEC-2022-0038"],"RUSTSEC-2022-0034":["RUSTSEC-2022-0034"],"CVE-2021-36753":["RUSTSEC-2021-0106"],"CVE-2021-29929":["RUSTSEC-2021-0039"],"CVE-2020-35868":["RUSTSEC-2020-0014"],"CVE-2020-35898":["RUSTSEC-2020-0045"],"CVE-2020-36446":["RUSTSEC-2020-0126"],"CVE-2021-29939":["RUSTSEC-2021-0048"],"CVE-2021-27378":["RUSTSEC-2021-0023"],"CVE-2018-20990":["RUSTSEC-2018-0002"],"RUSTSEC-2021-0105":["RUSTSEC-2021-0105"],"RUSTSEC-2021-0119":["RUSTSEC-2021-0119"],"RUSTSEC-2021-0091":["RUSTSEC-2021-0091"],"RUSTSEC-2020-0086":["RUSTSEC-2020-0086"],"RUSTSEC-2020-0034":["RUSTSEC-2020-0034"],"RUSTSEC-2020-0087":["RUSTSEC-2020-0087"],"RUSTSEC-2016-0006":["RUSTSEC-2016-0006"],"RUSTSEC-2022-0009":["RUSTSEC-2022-0009"],"RUSTSEC-2021-0062":["RUSTSEC-2021-0062"],"RUSTSEC-2022-0004":["RUSTSEC-2022-0004"],"RUSTSEC-2021-0112":["RUSTSEC-2021-0112"],"CVE-2021-26306":["RUSTSEC-2021-0013"],"RUSTSEC-2019-0030":["RUSTSEC-2019-0030"],"CVE-2017-18589":["RUSTSEC-2017-0005"],"RUSTSEC-2021-0123":["RUSTSEC-2021-0123"],"CVE-2020-36318":["CVE-2020-36318"],"RUSTSEC-2021-0075":["RUSTSEC-2021-0075"],"RUSTSEC-2021-0026":["RUSTSEC-2021-0026"],"CVE-2021-21299":["RUSTSEC-2021-0020"],"CVE-2021-26956":["RUSTSEC-2021-0019"],"CVE-2021-26305":["RUSTSEC-2021-0012"],"RUSTSEC-2021-0095":["RUSTSEC-2021-0095"],"CVE-2020-36323":["CVE-2020-36323"],"CVE-2020-6174":["RUSTSEC-2020-0024"],"RUSTSEC-2021-0033":["RUSTSEC-2021-0033"],"CVE-2020-35886":["RUSTSEC-2020-0034"],"CVE-2015-20001":["CVE-2015-20001"],"CVE-2020-35920":["RUSTSEC-2020-0079"],"CVE-2020-35901":["RUSTSEC-2020-0048"],"CVE-2018-1000657":["CVE-2018-1000657"],"RUSTSEC-2021-0042":["RUSTSEC-2021-0042"],"RUSTSEC-2022-0044":["RUSTSEC-2022-0044"],"RUSTSEC-2020-0129":["RUSTSEC-2020-0129"],"RUSTSEC-2020-0047":["RUSTSEC-2020-0047"],"RUSTSEC-2022-0033":["RUSTSEC-2022-0033"],"RUSTSEC-2021-0122":["RUSTSEC-2021-0122"],"CVE-2020-36203":["RUSTSEC-2020-0094"],"RUSTSEC-2020-0161":["RUSTSEC-2020-0161"],"RUSTSEC-2020-0030":["RUSTSEC-2020-0030"],"CVE-2019-20399":["RUSTSEC-2020-0156"],"RUSTSEC-2016-0002":["RUSTSEC-2016-0002"],"RUSTSEC-2021-0076":["RUSTSEC-2021-0076"],"CVE-2020-35895":["RUSTSEC-2020-0042"],"RUSTSEC-2021-0114":["RUSTSEC-2021-0114"],"RUSTSEC-2020-0141":["RUSTSEC-2020-0141"],"RUSTSEC-2018-0002":["RUSTSEC-2018-0002"],"CVE-2020-35859":["RUSTSEC-2020-0004"],"CVE-2020-36440":["RUSTSEC-2020-0120"],"RUSTSEC-2020-0053":["RUSTSEC-2020-0053"],"RUSTSEC-2022-0026":["RUSTSEC-2022-0026"],"GHSA-pqqp-xmhj-wgcw":["RUSTSEC-2021-0093"],"RUSTSEC-2020-0080":["RUSTSEC-2020-0080"],"CVE-2020-35883":["RUSTSEC-2020-0030"],"CVE-2020-13759":["RUSTSEC-2020-0157"],"CAN-2021-1000007":["RUSTSEC-2021-0041"],"RUSTSEC-2018-0001":["RUSTSEC-2018-0001"],"RUSTSEC-2020-0041":["RUSTSEC-2020-0041"],"RUSTSEC-2020-0043":["RUSTSEC-2020-0043"],"RUSTSEC-2022-0039":["RUSTSEC-2022-0039"],"GHSA-5h46-h7hh-c6x9":["RUSTSEC-2021-0079"],"RUSTSEC-2021-0118":["RUSTSEC-2021-0118"],"GHSA-qc36-q22q-cjw3":["RUSTSEC-2021-0069"],"RUSTSEC-2021-0019":["RUSTSEC-2021-0019"],"RUSTSEC-2020-0115":["RUSTSEC-2020-0115"],"RUSTSEC-2020-0064":["RUSTSEC-2020-0064"],"CVE-2020-25792":["RUSTSEC-2020-0041"],"RUSTSEC-2022-0001":["RUSTSEC-2022-0001"],"RUSTSEC-2021-0046":["RUSTSEC-2021-0046"],"RUSTSEC-2021-0045":["RUSTSEC-2021-0045"],"GHSA-pp74-39w2-v4w9":["RUSTSEC-2021-0102"],"RUSTSEC-2020-0067":["RUSTSEC-2020-0067"],"RUSTSEC-2020-0060":["RUSTSEC-2020-0060"],"RUSTSEC-2020-0009":["RUSTSEC-2020-0009"],"RUSTSEC-2020-0039":["RUSTSEC-2020-0039"],"RUSTSEC-2022-0018":["RUSTSEC-2022-0018"],"CVE-2021-38511":["RUSTSEC-2021-0080"],"CVE-2020-36202":["RUSTSEC-2020-0093"],"CVE-2020-35916":["RUSTSEC-2020-0073"],"RUSTSEC-2021-0101":["RUSTSEC-2021-0101"],"RUSTSEC-2020-0156":["RUSTSEC-2020-0156"],"RUSTSEC-2020-0046":["RUSTSEC-2020-0046"],"CVE-2018-25001":["RUSTSEC-2018-0020"],"CVE-2020-36449":["RUSTSEC-2020-0129"],"RUSTSEC-2021-0115":["RUSTSEC-2021-0115"],"RUSTSEC-2019-0036":["RUSTSEC-2019-0036"],"CVE-2021-38196":["RUSTSEC-2021-0077"],"CVE-2021-36376":["RUSTSEC-2021-0105"],"CVE-2020-36463":["RUSTSEC-2020-0143"],"RUSTSEC-2020-0062":["RUSTSEC-2020-0062"],"RUSTSEC-2022-0049":["RUSTSEC-2022-0049"],"RUSTSEC-2021-0034":["RUSTSEC-2021-0034"],"RUSTSEC-2021-0109":["RUSTSEC-2021-0109"],"RUSTSEC-2020-0098":["RUSTSEC-2020-0098"],"RUSTSEC-2020-0148":["RUSTSEC-2020-0148"],"RUSTSEC-2020-0153":["RUSTSEC-2020-0153"],"CVE-2020-35928":["RUSTSEC-2020-0092"],"RUSTSEC-2019-0024":["RUSTSEC-2019-0024"],"CVE-2021-25908":["RUSTSEC-2021-0011"],"CVE-2020-36441":["RUSTSEC-2020-0121"],"RUSTSEC-2021-0040":["RUSTSEC-2021-0040"],"RUSTSEC-2021-0088":["RUSTSEC-2021-0088"],"RUSTSEC-2021-0002":["RUSTSEC-2021-0002"],"RUSTSEC-2021-0107":["RUSTSEC-2021-0107"],"CVE-2021-28878":["CVE-2021-28878"],"CVE-2018-20996":["RUSTSEC-2018-0009"],"RUSTSEC-2017-0004":["RUSTSEC-2017-0004"],"RUSTSEC-2016-0004":["RUSTSEC-2016-0004"],"RUSTSEC-2021-0052":["RUSTSEC-2021-0052"],"CVE-2020-36444":["RUSTSEC-2020-0124"],"CVE-2021-23841":["RUSTSEC-2021-0058"],"CVE-2019-25004":["RUSTSEC-2019-0028"],"CVE-2017-1000430":["RUSTSEC-2017-0004"],"CVE-2020-35881":["RUSTSEC-2020-0027"],"CVE-2018-20994":["RUSTSEC-2018-0007"],"CVE-2019-16880":["RUSTSEC-2019-0021"],"RUSTSEC-2021-0124":["RUSTSEC-2021-0124"],"CVE-2020-35907":["RUSTSEC-2020-0061"],"CVE-2020-35924":["RUSTSEC-2020-0087"],"RUSTSEC-2021-0055":["RUSTSEC-2021-0055"],"RUSTSEC-2021-0061":["RUSTSEC-2021-0061"],"RUSTSEC-2020-0084":["RUSTSEC-2020-0084"],"RUSTSEC-2020-0079":["RUSTSEC-2020-0079"],"RUSTSEC-2021-0027":["RUSTSEC-2021-0027"],"RUSTSEC-2022-0013":["RUSTSEC-2022-0013"],"CVE-2020-36219":["RUSTSEC-2020-0113"],"RUSTSEC-2020-0003":["RUSTSEC-2020-0003"],"CVE-2021-29940":["RUSTSEC-2021-0049"],"RUSTSEC-2021-0037":["RUSTSEC-2021-0037"],"GHSA-v666-6w97-pcwm":["RUSTSEC-2021-0107"],"RUSTSEC-2021-0068":["RUSTSEC-2021-0068"],"CVE-2021-30454":["RUSTSEC-2021-0051"],"GHSA-48vq-8jqv-gm6f":["RUSTSEC-2021-0108"],"RUSTSEC-2020-0077":["RUSTSEC-2020-0077"],"RUSTSEC-2020-0151":["RUSTSEC-2020-0151"],"RUSTSEC-2020-0149":["RUSTSEC-2020-0149"],"RUSTSEC-2020-0019":["RUSTSEC-2020-0019"],"RUSTSEC-2019-0020":["RUSTSEC-2019-0020"],"RUSTSEC-2022-0006":["RUSTSEC-2022-0006"],"RUSTSEC-2020-0032":["RUSTSEC-2020-0032"],"RUSTSEC-2020-0101":["RUSTSEC-2020-0101"],"RUSTSEC-2019-0019":["RUSTSEC-2019-0019"],"CVE-2022-1473":["RUSTSEC-2022-0025"],"CVE-2021-28030":["RUSTSEC-2021-0029"],"RUSTSEC-2021-0113":["RUSTSEC-2021-0113"],"RUSTSEC-2020-0099":["RUSTSEC-2020-0099"],"CVE-2018-21000":["RUSTSEC-2018-0013"],"RUSTSEC-2021-0100":["RUSTSEC-2021-0100"],"RUSTSEC-2020-0058":["RUSTSEC-2020-0058"],"RUSTSEC-2021-0041":["RUSTSEC-2021-0041"],"RUSTSEC-2021-0056":["RUSTSEC-2021-0056"],"CVE-2022-2097":["RUSTSEC-2022-0032"],"CVE-2020-35864":["RUSTSEC-2020-0009"],"RUSTSEC-2020-0106":["RUSTSEC-2020-0106"],"RUSTSEC-2018-0003":["RUSTSEC-2018-0003"],"CVE-2018-20989":["RUSTSEC-2018-0001"],"RUSTSEC-2020-0015":["RUSTSEC-2020-0015"],"RUSTSEC-2021-0048":["RUSTSEC-2021-0048"],"RUSTSEC-2020-0131":["RUSTSEC-2020-0131"],"CVE-2021-45710":["RUSTSEC-2021-0124"],"RUSTSEC-2021-0127":["RUSTSEC-2021-0127"],"RUSTSEC-2021-0022":["RUSTSEC-2021-0022"],"CVE-2021-38192":["RUSTSEC-2021-0073"],"CVE-2021-28032":["RUSTSEC-2021-0031"],"CVE-2020-35914":["RUSTSEC-2020-0070"],"GHSA-f3fg-5j9p-vchc":["RUSTSEC-2021-0104"],"RUSTSEC-2021-0090":["RUSTSEC-2021-0090"],"CVE-2020-36317":["CVE-2020-36317"],"CVE-2020-35904":["RUSTSEC-2020-0052"],"CVE-2022-1434":["RUSTSEC-2022-0026"],"CVE-2020-35875":["RUSTSEC-2020-0019"],"CVE-2021-28305":["RUSTSEC-2021-0037"],"RUSTSEC-2019-0031":["RUSTSEC-2019-0031"],"CVE-2022-24791":["RUSTSEC-2022-0016"],"RUSTSEC-2020-0069":["RUSTSEC-2020-0069"],"RUSTSEC-2020-0130":["RUSTSEC-2020-0130"],"CVE-2021-26307":["RUSTSEC-2021-0013"],"CVE-2020-35915":["RUSTSEC-2020-0072"],"CVE-2020-35893":["RUSTSEC-2020-0039"],"CVE-2020-25573":["RUSTSEC-2020-0026"],"GHSA-4rx6-g5vg-5f3j":["RUSTSEC-2022-0038","RUSTSEC-2022-0037"],"CVE-2022-0778":["RUSTSEC-2022-0014"],"RUSTSEC-2021-0035":["RUSTSEC-2021-0035"],"CVE-2021-25905":["RUSTSEC-2021-0008"],"RUSTSEC-2020-0123":["RUSTSEC-2020-0123"],"GHSA-mm4m-qg48-f7wc":["RUSTSEC-2020-0157"],"CVE-2019-15554":["RUSTSEC-2019-0012"],"GHSA-hpqh-2wqx-7qp5":["RUSTSEC-2021-0067"],"GHSA-v78m-2q7v-fjqp":["RUSTSEC-2022-0030"],"CVE-2019-15549":["RUSTSEC-2019-0007"],"RUSTSEC-2018-0013":["RUSTSEC-2018-0013"],"CVE-2021-23840":["RUSTSEC-2021-0057"],"RUSTSEC-2018-0018":["RUSTSEC-2018-0018"],"RUSTSEC-2017-0002":["RUSTSEC-2017-0002"],"RUSTSEC-2021-0066":["RUSTSEC-2021-0066"],"CVE-2021-29930":["RUSTSEC-2021-0040"],"RUSTSEC-2021-0130":["RUSTSEC-2021-0130"],"CVE-2021-27377":["RUSTSEC-2021-0022"],"CVE-2020-35880":["RUSTSEC-2020-0025"],"RUSTSEC-2020-0025":["RUSTSEC-2020-0025"],"RUSTSEC-2020-0133":["RUSTSEC-2020-0133"],"RUSTSEC-2017-0006":["RUSTSEC-2017-0006"],"CVE-2017-20004":["CVE-2017-20004"],"CVE-2021-31162":["CVE-2021-31162"],"CVE-2021-38189":["RUSTSEC-2021-0069"],"RUSTSEC-2022-0040":["RUSTSEC-2022-0040"],"CVE-2021-29932":["RUSTSEC-2021-0041"],"CVE-2022-29185":["RUSTSEC-2022-0018"],"RUSTSEC-2020-0114":["RUSTSEC-2020-0114"],"CVE-2021-29931":["RUSTSEC-2021-0040"],"RUSTSEC-2020-0038":["RUSTSEC-2020-0038"],"CVE-2021-39219":["RUSTSEC-2021-0110"],"RUSTSEC-2019-0033":["RUSTSEC-2019-0033"],"RUSTSEC-2019-0018":["RUSTSEC-2019-0018"],"RUSTSEC-2021-0024":["RUSTSEC-2021-0024"],"CVE-2021-3450":["RUSTSEC-2021-0056"],"CVE-2020-25576":["RUSTSEC-2019-0035"],"CVE-2020-36436":["RUSTSEC-2020-0116"],"CVE-2020-36433":["RUSTSEC-2020-0035"],"RUSTSEC-2016-0001":["RUSTSEC-2016-0001","RUSTSEC-2016-0002"],"CVE-2020-35923":["RUSTSEC-2020-0082"],"RUSTSEC-2021-0050":["RUSTSEC-2021-0050"],"CVE-2021-27671":["RUSTSEC-2021-0026"],"CVE-2020-28247":["RUSTSEC-2020-0069"],"RUSTSEC-2021-0117":["RUSTSEC-2021-0117"],"CVE-2020-36212":["RUSTSEC-2020-0105"],"RUSTSEC-2021-0059":["RUSTSEC-2021-0059"],"RUSTSEC-2020-0052":["RUSTSEC-2020-0052"],"CVE-2021-31996":["RUSTSEC-2021-0053"],"CVE-2021-28028":["RUSTSEC-2021-0028"],"CVE-2021-26958":["RUSTSEC-2021-0019"],"RUSTSEC-2021-0094":["RUSTSEC-2021-0094"],"RUSTSEC-2021-0135":["RUSTSEC-2021-0135"],"CVE-2020-36451":["RUSTSEC-2020-0131"],"CVE-2020-36464":["RUSTSEC-2020-0145"],"CVE-2019-15553":["RUSTSEC-2019-0011"],"CVE-2016-10933":["RUSTSEC-2016-0003"],"RUSTSEC-2021-0071":["RUSTSEC-2021-0071"],"RUSTSEC-2019-0002":["RUSTSEC-2019-0002"],"RUSTSEC-2020-0092":["RUSTSEC-2020-0092"],"CVE-2019-15542":["RUSTSEC-2019-0001"],"CVE-2022-1343":["RUSTSEC-2022-0027"],"RUSTSEC-2020-0138":["RUSTSEC-2020-0138"],"RUSTSEC-2019-0027":["RUSTSEC-2019-0027"],"RUSTSEC-2022-0011":["RUSTSEC-2022-0011"],"RUSTSEC-2020-0026":["RUSTSEC-2020-0026"],"CVE-2020-26297":["RUSTSEC-2021-0001"],"CVE-2019-16144":["RUSTSEC-2019-0020"],"CVE-2022-24713":["RUSTSEC-2022-0013"],"RUSTSEC-2021-0073":["RUSTSEC-2021-0073"],"CVE-2021-38193":["RUSTSEC-2021-0074"],"RUSTSEC-2020-0122":["RUSTSEC-2020-0122"],"RUSTSEC-2020-0157":["RUSTSEC-2020-0157"],"RUSTSEC-2022-0045":["RUSTSEC-2022-0045"],"CVE-2021-28036":["RUSTSEC-2021-0035"],"RUSTSEC-2020-0160":["RUSTSEC-2020-0160"],"CVE-2019-12083":["CVE-2019-12083"],"CVE-2020-35888":["RUSTSEC-2020-0034"],"RUSTSEC-2021-0058":["RUSTSEC-2021-0058"],"RUSTSEC-2018-0020":["RUSTSEC-2018-0020"],"RUSTSEC-2021-0077":["RUSTSEC-2021-0077"],"RUSTSEC-2022-0021":["RUSTSEC-2022-0021"],"GHSA-5q2r-92f9-4m49":["RUSTSEC-2020-0024"],"CVE-2022-2274":["RUSTSEC-2022-0033"],"CVE-2021-25900":["RUSTSEC-2021-0003"],"RUSTSEC-2019-0015":["RUSTSEC-2019-0015"],"RUSTSEC-2020-0070":["RUSTSEC-2020-0070"],"CVE-2020-25793":["RUSTSEC-2020-0041"],"RUSTSEC-2018-0022":["RUSTSEC-2018-0022"],"RUSTSEC-2018-0010":["RUSTSEC-2018-0010"],"RUSTSEC-2017-0003":["RUSTSEC-2017-0003"],"RUSTSEC-2020-0088":["RUSTSEC-2020-0088"],"RUSTSEC-2020-0120":["RUSTSEC-2020-0120"],"CVE-2021-3712":["RUSTSEC-2021-0098"],"RUSTSEC-2020-0146":["RUSTSEC-2020-0146"],"RUSTSEC-2022-0016":["RUSTSEC-2022-0016"],"RUSTSEC-2020-0102":["RUSTSEC-2020-0102"],"RUSTSEC-2020-0091":["RUSTSEC-2020-0091"],"RUSTSEC-2021-0086":["RUSTSEC-2021-0086"],"CVE-2021-3711":["RUSTSEC-2021-0097"],"CVE-2021-28037":["RUSTSEC-2021-0036"],"RUSTSEC-2022-0030":["RUSTSEC-2022-0030"],"RUSTSEC-2021-0031":["RUSTSEC-2021-0031"],"RUSTSEC-2021-0014":["RUSTSEC-2021-0014"],"CVE-2020-36214":["RUSTSEC-2020-0106"],"CVE-2020-36447":["RUSTSEC-2020-0127"],"CVE-2019-25009":["RUSTSEC-2019-0034"],"CVE-2019-15545":["RUSTSEC-2019-0004"],"CVE-2020-35882":["RUSTSEC-2020-0028"],"CVE-2021-25906":["RUSTSEC-2021-0009"],"RUSTSEC-2018-0011":["RUSTSEC-2018-0011"],"CVE-2021-39218":["RUSTSEC-2021-0110"],"CVE-2021-28876":["CVE-2021-28876"],"RUSTSEC-2019-0001":["RUSTSEC-2019-0001"],"RUSTSEC-2022-0052":["RUSTSEC-2022-0052"],"RUSTSEC-2022-0041":["RUSTSEC-2022-0041"],"RUSTSEC-2022-0007":["RUSTSEC-2022-0007"],"RUSTSEC-2022-0035":["RUSTSEC-2022-0035"],"RUSTSEC-2022-0015":["RUSTSEC-2022-0015"],"CVE-2021-4044":["RUSTSEC-2021-0129"],"CVE-2021-32714":["RUSTSEC-2021-0079"],"RUSTSEC-2021-0078":["RUSTSEC-2021-0078"],"CVE-2020-36466":["RUSTSEC-2020-0148"],"GHSA-7cqg-8449-rmfv":["RUSTSEC-2020-0156"],"RUSTSEC-2021-0051":["RUSTSEC-2021-0051"],"RUSTSEC-2020-0059":["RUSTSEC-2020-0059"],"RUSTSEC-2020-0100":["RUSTSEC-2020-0100"],"RUSTSEC-2019-0016":["RUSTSEC-2019-0016"],"RUSTSEC-2020-0035":["RUSTSEC-2020-0035"],"RUSTSEC-2018-0008":["RUSTSEC-2019-0002","RUSTSEC-2018-0008"],"RUSTSEC-2020-0055":["RUSTSEC-2020-0055"],"CVE-2020-15093":["RUSTSEC-2020-0024"],"CVE-2021-38187":["RUSTSEC-2021-0065"],"RUSTSEC-2021-0084":["RUSTSEC-2021-0084"],"RUSTSEC-2021-0128":["RUSTSEC-2021-0128"],"RUSTSEC-2020-0144":["RUSTSEC-2020-0144"],"CVE-2021-38195":["RUSTSEC-2021-0076"],"RUSTSEC-2022-0017":["RUSTSEC-2022-0017"],"RUSTSEC-2021-0063":["RUSTSEC-2021-0063"],"CVE-2020-36450":["RUSTSEC-2020-0130"],"RUSTSEC-2020-0075":["RUSTSEC-2020-0075"],"CVE-2021-29938":["RUSTSEC-2021-0047"],"CVE-2020-36465":["RUSTSEC-2020-0146"],"RUSTSEC-2022-0036":["RUSTSEC-2022-0036"],"CVE-2021-28875":["CVE-2021-28875"],"RUSTSEC-2021-0028":["RUSTSEC-2021-0028"],"RUSTSEC-2018-0016":["RUSTSEC-2018-0016"],"RUSTSEC-2022-0022":["RUSTSEC-2022-0022"],"CVE-2018-25008":["CVE-2018-25008"],"CVE-2021-38188":["RUSTSEC-2021-0068"],"RUSTSEC-2021-0039":["RUSTSEC-2021-0039"],"RUSTSEC-2017-0005":["RUSTSEC-2017-0005"],"RUSTSEC-2020-0090":["RUSTSEC-2020-0090"],"CVE-2020-36209":["RUSTSEC-2020-0102"],"RUSTSEC-2019-0025":["RUSTSEC-2019-0025"],"CVE-2019-16143":["RUSTSEC-2019-0019"],"RUSTSEC-2019-0004":["RUSTSEC-2019-0004"],"CVE-2021-3449":["RUSTSEC-2021-0055"],"RUSTSEC-2021-0133":["RUSTSEC-2021-0133"],"RUSTSEC-2020-0126":["RUSTSEC-2020-0126"],"RUSTSEC-2020-0031":["RUSTSEC-2020-0031"],"CVE-2019-16138":["RUSTSEC-2019-0014"],"CVE-2021-26952":["RUSTSEC-2021-0016"],"CVE-2018-20998":["RUSTSEC-2018-0011"],"CVE-2021-29933":["RUSTSEC-2021-0042"],"CVE-2020-35899":["RUSTSEC-2020-0046"],"CVE-2019-25003":["RUSTSEC-2019-0027"],"CVE-2021-28031":["RUSTSEC-2021-0030"],"RUSTSEC-2020-0083":["RUSTSEC-2020-0083"],"CVE-2020-36460":["RUSTSEC-2020-0140"],"RUSTSEC-2020-0023":["RUSTSEC-2020-0023"],"RUSTSEC-2020-0154":["RUSTSEC-2020-0154"],"CVE-2021-25901":["RUSTSEC-2021-0004"],"CVE-2020-36215":["RUSTSEC-2020-0107"],"RUSTSEC-2020-0021":["RUSTSEC-2020-0021"],"RUSTSEC-2021-0102":["RUSTSEC-2021-0102"],"RUSTSEC-2020-0093":["RUSTSEC-2020-0093"],"CVE-2019-16137":["RUSTSEC-2019-0013"],"CVE-2019-16882":["RUSTSEC-2019-0023"],"RUSTSEC-2021-0085":["RUSTSEC-2021-0085"],"RUSTSEC-2018-0019":["RUSTSEC-2018-0019"],"CVE-2021-3520":["RUSTSEC-2022-0051"],"RUSTSEC-2020-0121":["RUSTSEC-2020-0121"],"RUSTSEC-2020-0142":["RUSTSEC-2020-0142"],"RUSTSEC-2021-0132":["RUSTSEC-2021-0132"],"CVE-2021-32715":["RUSTSEC-2021-0078"],"RUSTSEC-2021-0104":["RUSTSEC-2021-0104"],"RUSTSEC-2020-0001":["RUSTSEC-2020-0001"],"RUSTSEC-2021-0106":["RUSTSEC-2021-0106"],"RUSTSEC-2019-0013":["RUSTSEC-2019-0013"],"RUSTSEC-2022-0029":["RUSTSEC-2022-0029"],"GHSA-f3pg-qwvg-p99c":["RUSTSEC-2021-0078"],"RUSTSEC-2020-0150":["RUSTSEC-2020-0150"],"RUSTSEC-2020-0094":["RUSTSEC-2020-0094"],"CVE-2021-31919":["RUSTSEC-2021-0054"],"RUSTSEC-2021-0053":["RUSTSEC-2021-0053"],"CVE-2020-35926":["RUSTSEC-2020-0089"],"RUSTSEC-2020-0028":["RUSTSEC-2020-0028"],"CVE-2020-36204":["RUSTSEC-2020-0096"],"CVE-2019-15544":["RUSTSEC-2019-0003"],"RUSTSEC-2021-0016":["RUSTSEC-2021-0016"],"RUSTSEC-2020-0147":["RUSTSEC-2020-0147"],"CVE-2019-16141":["RUSTSEC-2019-0017"],"CVE-2020-36438":["RUSTSEC-2020-0118"],"CVE-2020-35871":["RUSTSEC-2020-0014"],"RUSTSEC-2020-0072":["RUSTSEC-2020-0072"],"CVE-2019-16142":["RUSTSEC-2019-0018"],"RUSTSEC-2022-0019":["RUSTSEC-2022-0019"],"RUSTSEC-2020-0085":["RUSTSEC-2020-0085"],"CVE-2021-26953":["RUSTSEC-2021-0017"],"RUSTSEC-2020-0036":["RUSTSEC-2020-0036"],"CVE-2019-25001":["RUSTSEC-2019-0025"],"CVE-2021-26955":["RUSTSEC-2021-0019"],"RUSTSEC-2021-0108":["RUSTSEC-2021-0108"],"RUSTSEC-2020-0054":["RUSTSEC-2020-0054"],"RUSTSEC-2022-0031":["RUSTSEC-2022-0031"],"CVE-2018-1000810":["CVE-2018-1000810"],"CVE-2020-35912":["RUSTSEC-2020-0070"],"CVE-2020-35927":["RUSTSEC-2020-0090"],"CVE-2019-15550":["RUSTSEC-2019-0008"],"RUSTSEC-2021-0083":["RUSTSEC-2021-0083"],"RUSTSEC-2021-0036":["RUSTSEC-2021-0036"],"RUSTSEC-2021-0120":["RUSTSEC-2021-0120"],"RUSTSEC-2021-0009":["RUSTSEC-2021-0009"],"CVE-2020-35884":["RUSTSEC-2020-0031"],"RUSTSEC-2022-0050":["RUSTSEC-2022-0050"],"RUSTSEC-2022-0023":["RUSTSEC-2022-0023"],"RUSTSEC-2020-0027":["RUSTSEC-2020-0027"],"RUSTSEC-2022-0028":["RUSTSEC-2022-0028"],"RUSTSEC-2021-0136":["RUSTSEC-2021-0136"],"CVE-2019-16140":["RUSTSEC-2019-0016"],"RUSTSEC-2021-0093":["RUSTSEC-2021-0093"],"RUSTSEC-2020-0049":["RUSTSEC-2020-0049"],"CVE-2020-36432":["RUSTSEC-2020-0033"],"CVE-2021-31154":["RUSTSEC-2021-0102"],"RUSTSEC-2021-0060":["RUSTSEC-2021-0060"],"RUSTSEC-2021-0025":["RUSTSEC-2021-0025"],"RUSTSEC-2020-0005":["RUSTSEC-2020-0005"],"CVE-2019-16881":["RUSTSEC-2019-0022"],"RUSTSEC-2021-0134":["RUSTSEC-2021-0134"],"RUSTSEC-2020-0076":["RUSTSEC-2020-0076"],"RUSTSEC-2019-0023":["RUSTSEC-2019-0023"],"RUSTSEC-2018-0012":["RUSTSEC-2018-0012"],"CVE-2021-38186":["RUSTSEC-2021-0063"],"RUSTSEC-2022-0025":["RUSTSEC-2022-0025"],"CVE-2021-28306":["RUSTSEC-2021-0038"],"CVE-2021-30455":["RUSTSEC-2021-0052"],"RUSTSEC-2021-0138":["RUSTSEC-2021-0138"],"CVE-2021-32810":["RUSTSEC-2021-0093"],"RUSTSEC-2021-0049":["RUSTSEC-2021-0049"],"CVE-2020-36462":["RUSTSEC-2020-0142"],"CVE-2020-35877":["RUSTSEC-2020-0022"],"CVE-2020-25795":["RUSTSEC-2020-0041"],"CVE-2019-25010":["RUSTSEC-2019-0036"],"RUSTSEC-2018-0007":["RUSTSEC-2018-0007"],"RUSTSEC-2021-0097":["RUSTSEC-2021-0097"],"RUSTSEC-2018-0014":["RUSTSEC-2018-0014"],"GHSA-82hm-vh7g-hrh9":["RUSTSEC-2021-0103"],"CVE-2020-36468":["RUSTSEC-2020-0148"],"RUSTSEC-2019-0032":["RUSTSEC-2019-0032"],"CVE-2021-29942":["RUSTSEC-2021-0050"],"RUSTSEC-2016-0003":["RUSTSEC-2016-0003"],"RUSTSEC-2021-0030":["RUSTSEC-2021-0030"],"RUSTSEC-2020-0068":["RUSTSEC-2020-0068"]}
var packages = ["pyo3","hyper","ruspiro-singleton","appendix","comrak","quinn","alg_ds","dashmap","actix-web","traitobject","array-queue","wasmtime","through","openssl-src","cpuid-bool","memoffset","bumpalo","nanorand","arr","rustdoc","chrono","double-checked-cell","multiqueue2","toolshed","failure","atomic-option","streebog","portaudio","byte_struct","endian_trait","cargo","libsecp256k1","mdbook","tectonic_xdv","libpulse-binding","untrusted","parc","simple-slab","futures-util","convec","blake2","pkcs11","model","stack","av-data","pleaser","atom","markdown","sha2","rulex","std","aesni","internment","ms3d","tower-http","messagepack-rs","thex","net2","lettre","buttplug","owning_ref","rdiff","rustsec","static_type_map","block-cipher-trait","conquer-once","bigint","os_str_bytes","http","asn1_der","protobuf","trust-dns-proto","cassandra","libusb","bra","stack_dst","marc","tiberius","nix","gfwx","rulinalg","base64","arc-swap","rustc-serialize","bam","qcell","tiny_http","arrow","simd-json","dces","lz4-sys","abi_stable","tar","ftd2xx-embedded-hal","shamir","actix-service","postscript","async-h1","calamine","cosmos_sdk","sized-chunks","raw-cpuid","nalgebra","rand_core","lexer","telemetry","columnar","containers","ckb","futures-intrusive","crossbeam-channel","mio","mopa","lazy-init","syncpool","neon","safe_app","truetype","rustdecimal","tough","gfx-auxil","quickersort","rocket","aovec","serde_cbor","ordered-float","safe_bindgen","ozone","stderr","git-delta","concread","fake-static","cache","portaudio-rs","sys-info","scottqueue","beef","ansi_term","tempdir","compu-brotli-sys","abox","totp-rs","socket2","pancurses","chunky","generic-array","noise_search","rusqlite","crossbeam-deque","buffoon","safe-api","ticketed_lock","futures-task","cookie","lz4-compress","safe-transmute","pty","crayon","rusb","signal-simple","vm-memory","bronzedb-protocol","safe_core","zeroize_derive","interfaces2","orion","websocket","safe-nd","tokio-rustls","ammonia","pnet","linked-hash-map","sodiumoxide","fruity","spirv_headers","scratchpad","thread_local","memmap","oqs","glsl-layout","directories","array-macro","brotli-sys","yottadb","actix-utils","spin","rust-crypto","may_queue","ffi_utils","libsbc","rustsec-example-crate","bunch","acc_reader","im","multiqueue","flatbuffers","arenavec","adtensor","slock","image","lock_api","heapless","tokio-proto","os_socketaddr","interledger-packet","iced-x86","rocksdb","reffers","multihash","v9","trust-dns-server","generator","smallvec","async-graphql","arrow2","jsonrpc-quic","difference","xcb","rmpv","uu_od","grep-cli","obstack","renderdoc","crossbeam-queue","yaml-rust","miscreant","insert_many","aes-ctr","ark-r1cs-std","sass-rs","libsecp256k1-rs","libp2p-deflate","serde_yaml","ws","rio","lucet-runtime-internals","enum-map","qwutils","prost-types","iana-time-zone","claxon","rental","security-framework","office","libflate","basic_dsp_matrix","lzw","cranelift-codegen","fake_clock","csv-sniffer","linea","prost","evm-core","compact_arena","algorithmica","alpm-rs","hashconsing","term","simple_asn1","mz-avro","flumedb","miow","crossbeam","actix-http","tokio","max7301","cgc","async-coap","lru","magnetic","juniper","quic-p2p","xml-rs","better-macro","unicycle","kekbit","anymap","eventio","dirs","ordnung","mozwire","chttp","branca","late-static","ncurses","arrayfire","ash","lever","routing","stackvector","bite","crypto2","derive-com-impl","openssl","rgb","mapr","r2d2_odbc","vec-const","slice-deque","regex","nb-connect","safe_authenticator","diesel","reorder","abomonation","conqueue","block-cipher","rust_sodium","lmdb","term_size","cargo-download","tremor-script","bitvec","plutonium","molecule","nano_arena","parse_duration","fltk","tiny_future","rcu_cell","crossbeam-utils","rust-embed","toodee","rkyv","stb_truetype","once_cell","libp2p-core","cdr","outer_cgi","string-interner","temporary","chan","cbox","autorand","aes-soft","dync","safe_vault","id-map","metrics-util","fil-ocl","time","try-mutex","odbc","stdweb","bat","windows","binjs_io","array-tools","disrustor","va-ts","stream-cipher","crust","actix-codec","chacha20"]
